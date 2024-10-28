import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import { CustomRequest } from '../types/requestTypes';
import validateMongoDbId from '../utils/validateMongodbId';

// Function to fetch all users from database
export const getUsers = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Get all users from database
    const users = await User.find(); // Fetch all users

    // Check if there are no users
    if (!users || users.length === 0) {
        res.status(404).json({ message: 'No users found' });
        return;
    }
    // If there are users return users
    res.status(200).json(users);
})

// Function to fetch a user from database
export const getUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    validateMongoDbId(id);
    const user = await User.findById(id); // Find user by ID

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.status(200).json(user);
})

// Function to update a user
export const updateUser = asyncHandler(async (req: CustomRequest, res: Response): Promise<void> => {
    const { _id } = req?.user;
    validateMongoDbId(_id);
    if (!_id) {
        res.status(400).json({ message: 'User not authenticated' });
        return;
    }

    const user = await User.findById(_id);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const password = req?.body?.password && await bcrypt.hash(req.body.password, salt);
    // Update user fields
    const updatedUser = await User.findByIdAndUpdate(_id, {
        name: req?.body?.username || user?.name,
        email: req?.body?.email || user?.email,
        password: password || user?.password,
        mobile: req?.body?.mobile || user?.mobile,
        location: req?.body?.location || user?.location,
    }, { new: true })

    res.status(200).json(updatedUser);
})

// Function to delete a user
export const deleteUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params 
    validateMongoDbId(id); // Validating the id from params, if its a valid mongodb id

    // Check for user with the id and delete user
    const user = await User.findByIdAndDelete(id);

    // If no user with the id send this message
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    // If everything went successful send this message
    res.status(200).json({ message: 'User deleted successfully' });
})

// Function to set privileges
export const privilege = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req?.params // Access the id from the req.params body
    validateMongoDbId(id) // Validate the id

    // Use the id to check if user exist in database
    const user = await User.findById(id);

    // If no user with the id, send this message
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    // If user exist update it role to it new set role
    user.role = req.body.role || user.role; // Update the user's role (e.g., 'admin', 'moderator', etc.)

    // Save changes in the database for the user
    const updatedUser = await user.save();

    // If everything went successful send this to the user
    res.status(200).json(updatedUser);
})

// Function to suspend user
export const suspendUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req?.params // Extract id from req?.params
    validateMongoDbId(id) // Ensure id is a valid mongodb id

    // Fetch user from database with the id
    const user = await User.findById(id);

    // Ensure user exist
    if (user) {
        user.isSuspended = true; // Suspend user
        await user.save(); // Save changes in database for user
        res.status(200).json({ message: `User ${user.email} has been suspended.` });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

// Function to unSuspend user
export const unSuspendUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req?.params // Extract id from req?.params
    validateMongoDbId(id) // Ensure id is a valid mongodb id

    // Fetch user from database with the id
    const user = await User.findById(id);

    // Ensure user exist
    if (user) {
        user.isSuspended = false; // Unsuspend user
        await user.save(); // Save changes in database for user
        res.status(200).json({ message: `User ${user.email} has been unSuspended.` });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

// Function to grant or revoke permissions based on user actions or changes in role
export const updateUserPermissions = async (req: Request, res: Response) => {
    const { userId, permissions } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.permissions = permissions;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error updating permissions', error });
    }
};