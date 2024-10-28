export interface IUser {
  _id: string,
  name: string;
  email: string;
  password: string;
  mobile: string;
  location: string,
  googleId?: string;
  role: string;
  isVerified: boolean;
  tokenRevoked: boolean;
  isSuspended: boolean;
  verificationToken?: string;
  permissions: string[];
  lastActive: Date;
  passwordChangedAt: Date,
  passwordResetToken?: String,
  passwordResetExpires?: Date,
}


export interface IUserInput {
  name: string;
  email: string;
  password: string;
  mobile: string;
  location: string
}