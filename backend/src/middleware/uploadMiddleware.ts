import multer from 'multer';
import { CloudinaryStorage } from '@fluidjs/multer-cloudinary';
import cloudinary from '../config/cloudinary';


// Define a function that creates and returns multer middleware for uploading files to Cloudinary
function uploadMiddleware(folderName: string, resourceType: 'video' | 'image' = 'image') {
  // Create CloudinaryStorage instance with Cloudinary configuration
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary, // Cloudinary instance
    params:  {
      folder: `${folderName.trim()}`, // Define folder path for uploaded files
      resource_type: resourceType,
      allowed_formats: resourceType === 'video' ? ['mp4', 'mov', 'avi'] : ['jpg', 'png', 'jpeg', 'gif'], // Set allowed file formats based on resource type

    },
  });

  // Return multer middleware configured with CloudinaryStorage
  return multer({
    storage: storage, // Use CloudinaryStorage for file storage
    limits: {
      fileSize: resourceType === 'video' ? 10 * 1024 * 1024 : 2 * 1024 * 1024, // Set maximum file size limit: 10 MB for videos, 2 MB for images
    },
  });
}

export default uploadMiddleware