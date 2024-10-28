import { v2 as cloudinary, ConfigOptions } from 'cloudinary';

// Configure Cloudinary with credentials from environment variables
const cloudinaryConfig: ConfigOptions = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_SECRET_KEY as string,
    secure: true,
};

cloudinary.config(cloudinaryConfig);

export default cloudinary;
