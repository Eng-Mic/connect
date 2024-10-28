/*
    Middleware functions are typically used for tasks that need to be performed before the main request handler
*/

import asyncHandler from 'express-async-handler';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import fs from 'fs';
import path from 'path';
import rateLimit from 'express-rate-limit';

// Define a custom Request type that includes the user property
interface CustomRequest extends Request {
    user?: any;
}

// Logger to track unauthorized access attempts
const logUnauthorizedAccess = (req: Request, message: string) => {
    const logFilePath = path.join(__dirname, 'unauthorized_access.log');
    const logMessage = `${new Date().toISOString()} - ${req.ip} - ${req.originalUrl} - ${message}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
};

// Rate limiting for sensitive routes
export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
    headers: true,
});

// Middleware to protect routes by verifying token in HttpOnly cookies
export const protect = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
    // Extract token from the cookies
    const token = req.cookies?.accessToken;

    // Ensure that the token exist
    if (!token) {
        logUnauthorizedAccess(req, 'Token missing');
        res.status(401).json({ message: 'Not authorized, token missing' });
        return; // Stop execution here
    }

    try {
        // Ensure that the JWT_SECRET is defined
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT secret is missing in environment variables');
        }

        // Decode | verify the token using the secret
        const decoded = jwt.verify(token, secret);

        // Ensure the decoded token is not a string and contains an ID
        if (typeof decoded !== 'string' && (decoded as JwtPayload).id) {
            const userId = (decoded as JwtPayload).id;

            // Find the user in the database using the extracted id
            const user = await User.findById(userId);

            // Check if the user exists and isVerified property is true
            if (!user || !user.isVerified) {
                logUnauthorizedAccess(req, 'User not verified or token expired');
                res.status(401).json({ message: 'User not verified or token expired' });
                return; // Stop execution here
            }

            // Check if the user's account is suspended
            if (user.isSuspended) {
                logUnauthorizedAccess(req, 'Account suspended');
                res.status(403).json({ message: 'Account suspended. Contact support for assistance.' });
                return;
            }

            // Check if user token has been revoked
            if (user.tokenRevoked) {
                logUnauthorizedAccess(req, 'Token has been revoked');
                res.status(401).json({ message: 'Token has been revoked' });
                return;
            }

            req.user = user; // Attach the user to the request object
            next(); // Call the next middleware or route handler
        } 
        else {
            logUnauthorizedAccess(req, 'Invalid token payload');
            res.status(401).json({ message: 'Invalid token payload' });
        }
    } catch (error) {
        console.error(error);

        // Handle expired token or verification errors
        const decoded = jwt.decode(token);
        if (decoded && typeof decoded !== 'string' && decoded.id) {
            const user = await User.findById(decoded.id);
            if (user) {
                user.isVerified = false;
                await user.save();
            }
        }
        logUnauthorizedAccess(req, 'Token expired');
        res.status(401).json({ message: 'Token expired. Please log in again.' });
    }
});


// Middleware to check if the user is an admin
export const admin = asyncHandler(async (req: CustomRequest, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, continue
    } else {
        logUnauthorizedAccess(req, 'User not authorized as admin');
        res.status(403).json({ message: 'Not authorized as admin' });
    }
});

// Middleware to check if the user is a campaigner
export const campaigner = asyncHandler(async (req: CustomRequest, res, next) => {
    if (req.user && req.user.role === 'campaigner') {
        next(); // User is a campaigner, continue
    } else {
        logUnauthorizedAccess(req, 'User not authorized as campaigner');
        res.status(403).json({ message: 'Not authorized as campaigner' });
    }
});

// Middleware to check if the user is an investor
export const investor = asyncHandler(async (req: CustomRequest, res, next) => {
    if (req.user && req.user.role === 'investor') {
        next(); // User is an investor, continue
    } else {
        logUnauthorizedAccess(req, 'User not authorized as investor');
        res.status(403).json({ message: 'Not authorized as investor' });
    }
});

// Function to check if the logged-in user has the required permissions for specific routes or actions.
export const checkPermission = (permission: string) => {
    return asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
        if (req.user && req.user.permissions.includes(permission)) {
            next(); // User has the required permission
        } else {
            res.status(403).json({ message: `Permission denied: Missing ${permission}` });
        }
    });
};