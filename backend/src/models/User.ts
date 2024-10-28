// user.model.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../types/userTypes';

// export interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
//     location: string,
//     googleId?: string;
//     role: string;
//     isVerified: boolean;
//     verificationToken?: string;
//     permissions: string[];
// }

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        mobile: { type: String, unique: true },
        location: { type: String},
        googleId: { type: String, unique: true, sparse: true },
        role: { type: String, default: 'user' },
        permissions: { type: [String], default: [] },
        verificationToken: { type: String },
        isVerified: { type: Boolean, required: true, default: false },
        tokenRevoked: { type: Boolean, default: false },
        isSuspended: { type: Boolean, default: false },
        lastActive: { type: Date },
        passwordChangedAt: { type: Date },
        passwordResetToken: { type: String },
        passwordResetExpires: { type: Date },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
