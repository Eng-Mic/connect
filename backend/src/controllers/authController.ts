/*
    Controller Functions typically handle specific requests and perform actions based on business logic (e.g., updating user data, processing requests)
 */

import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import { sendPasswordResetRequestEmail, sendVerificationEmail } from '../utils/mailer/authMailer';
import validator from 'validator';
import { generateToken, generateVerificationToken } from '../utils/generateToken';
import { CustomRequest } from '../types/requestTypes';
import validateMongoDbId from '../utils/validateMongodbId';
import axios from 'axios';
import CryptoJS from 'crypto-js';

// Register | Create new user
export const registerUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { username, email, password, location } = req.body;

    // Finding user in database with their email
    const userExist = await User.findOne({ email });
    if (userExist) {
        console.error({message: 'User already exists'});
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    // using bcryptjs:: hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = password && await bcrypt.hash(password, salt);

    // Generate verification token
    const verificationToken = generateVerificationToken(req.body);

    // New user info
    const newUser = new User({
        name: username,
        email,
        password: hashedPassword,
        location,
        verificationToken
    });

    // Save new user to the database
    const savedUser = await newUser.save();

    // Generate verification url
    const verificationUrl = `${process.env.CLIENT_BASE_URL}verifyAccount/${verificationToken}}`;

    // Send verification email to user, to confirm and set isVerified to true
    await sendVerificationEmail(savedUser?.email, savedUser?.name, verificationUrl);

    res.status(201).json({
        message: 'User register successfully. Please check your email to verify your account.',
        _id: savedUser?._id,
        name: savedUser?.name,
        email: savedUser?.email,
        isVerified: savedUser?.isVerified,
    });

});


// Login user to their respective account
export const loginUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    // Check if email is empty and email format is invalid
    if (!email || !validator.isEmail(email)) {
        res.status(400).json({ message: "Invalid email!" });
        return;
    }

    // Find user in database
    const findUser = await User.findOne({ email });

    // Validating input
    if (!findUser || !(password && await bcrypt.compare(password, findUser.password))) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    // Check if user isVerified is false
    if (!findUser.isVerified) {
        // Generate verification token
        const verificationToken = generateVerificationToken(findUser);

        // Set user verification in database to the generated verification token
        findUser.verificationToken = verificationToken;

        // Save changes in database
        await findUser.save();

        // Generate verification url
        const verificationUrl = `${process.env.CLIENT_BASE_URL}/verifyAccount/${verificationToken}`;

        // Send verification email to user, to confirm account and set isVerified to true
        await sendVerificationEmail(findUser.email, findUser.name, verificationUrl);

        res.status(403).json({ message: "Account not verified. Check your email." });
        return;
    }

    res.status(200).json({
        message: "Account not verified. Check your email.",
        _id: findUser._id,
        name: findUser.name,
        email: findUser.email,
        isVerified: findUser.isVerified
    });
})


export const googleOAuth = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { code, location } = req.body; // Extract code from req.body

    // Exchange authorization code for access token
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: 'postmessage',
      grant_type: 'authorization_code',
    });

    const { access_token } = response.data;

    // Now you can use the access token to get user information
    const userInfo = await axios.get(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    {
        headers: {
        Authorization: `Bearer ${access_token}`,
        },
    }
    );
    const { email, name, googleId } = userInfo.data;
    const userExist = await User.findOne({ email });

    // Generate verification token
    const verificationToken = generateVerificationToken(req.body);

    if(!userExist) {
        // New user info
        const newUser = new User({
            name,
            email,
            location,
            googleId,
            verificationToken
        });

        // Save new user to the database
        await newUser.save();

        // Generate verification url
        const verificationUrl = `${process.env.CLIENT_BASE_URL}/verifyAccount/${verificationToken}`;
        // Send verification email
        await sendVerificationEmail(newUser.email, newUser.name, verificationUrl);

        res.status(201).json({
            message: 'User registered. Verification email sent.',
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isVerified: newUser.isVerified
        });
        return;
    }
    else if(!userExist.isVerified) {
        // Generate verification token
        const verificationToken = generateVerificationToken(userExist);

        // Set user verification in database to the generated verification token
        userExist.verificationToken = verificationToken;

        // Save changes in database
        await userExist.save();

        // Generate verification url
        const verificationUrl = `${process.env.CLIENT_BASE_URL}/verifyAccount/${verificationToken}`;

        // Send verification email to user, to confirm account and set isVerified to true
        await sendVerificationEmail(userExist.email, userExist.name, verificationUrl);

        res.status(403).json({
            message: "Account not verified. Check your email." ,
            _id: userExist._id,
            name: userExist.name,
            email: userExist.email,
            isVerified: userExist.isVerified
        });
        return;
    }
})


export const verifyAccount = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Get token from req.params
    const { emailToken } = req.params;

    // Check if verification token exist
    if (!emailToken) {
        res.status(400).json({ message: "Verification token not found!" });
        return;
    }

    // Find user with the token get from req.params.token
    const user = await User.findOne({ verificationToken: emailToken });

    if (!user) {
        res.status(400).json({ message: "Invalid or expired token" });
        return
    }

    // Update the following
    user.isVerified = true;
    user.verificationToken = undefined;
    user.lastActive = new Date(Date.now());

    // Save changes in database
    await user.save();

    const token = generateToken(user);

    // Set the token in HttpOnly cookie
    res.cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000, // 1 hour
    });

    // Send this response to the server
    res.status(201).json({
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        isVerified: user?.isVerified,
        lastActive: user?.lastActive
    });

})


// Generate Password Reset Token and Send Email
export const forgotPasswordRequestEmail = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    // Check if user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ message: 'User not found with this email' });
        return;
    }

    // Generate reset token
    const resetToken = CryptoJS.lib.WordArray.random(32).toString(); // Generate a random string token

    // Encrypt the token to save in the database
    const hashedToken = CryptoJS.SHA256(resetToken).toString(CryptoJS.enc.Hex);

    // Set reset password token and expiration date
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save changes to the user
    await user.save();

    // Generate reset URL
    const resetUrl = `${process.env.CLIENT_BASE_URL}/reset-password/${resetToken}`;

    // Send password reset request email
    await sendPasswordResetRequestEmail(user.email, user.name, resetUrl);

    res.status(200).json({
        message: 'Password reset email sent',
    });
});


// Reset Password
export const resetPassword = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { token } = req.params;
    const { newPassword } = req.body;

    // Hash the token received from the params
    const hashedToken = CryptoJS.SHA256(token).toString(CryptoJS.enc.Hex);

    // Find the user with the token and check if it hasn't expired
    const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        res.status(400).json({ message: "Invalid or expired token!" });
        return;
    }

    // Set the new password and clear the reset fields
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.passwordChangedAt = new Date(Date.now());
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    // Save changes in database for user
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
});



export const logoutUser = asyncHandler(async (req: CustomRequest, res: Response): Promise<void> => {
    const { _id } = req?.user // Extract _id from req.user
    validateMongoDbId(_id) // Ensure _id is a valid mongodb _id

    // Ensure _id exist
    if (!_id) {
        res.status(400).json({ message: 'User not authenticated' });
        return;
    }

    // Check for user with the _id in the database
    const user = await User.findById(_id);

    // Ensure user exist
    if (!user) {
        res.status(400).json({ message: 'User not found' });
        return;
    }

    user.isVerified = false; // Invalidate token and set isVerified to false
    await user.save(); // Save changes in database for the user

    // Clear the auth cookie
    res.clearCookie('authToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Secure cookie in production
        sameSite: 'strict', // Prevent CSRF attacks
    });

    // Clear the auth state in client
    res.status(200).json({
        message: 'Logged out successfully. Auth state cleared.'
    });
});
