import { Request } from 'express';

// Extend the Request type
export interface CustomRequest extends Request {
    user?: any;
}
