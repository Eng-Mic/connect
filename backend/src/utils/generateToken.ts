import jwt from 'jsonwebtoken'

interface GenerateTokenProps {
    _id: string,
    email: string,
}

export const generateToken = (user: GenerateTokenProps) => {
    return jwt.sign({
        _id: user?._id,
        email: user?.email
    }, 
    process.env.JWT_SECRET as string,
        { expiresIn: '3d' }
    );
}

export const generateVerificationToken = (user: GenerateTokenProps) => {
    return jwt.sign({
        _id: user?._id,
        email: user?.email
    }, 
    process.env.JWT_SECRET as string,
        { expiresIn: '30m' }
    );
}

