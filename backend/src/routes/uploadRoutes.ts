import express from 'express';
import { deleteMedia, uploadMultipleImages } from '../controllers/uploadController';
import uploadMiddleware from '../middleware/uploadMiddleware';
// Create an instance of express.Router
const uploadRoute = express.Router();

// Route for multiple image uploads with Cloudinary upload
uploadRoute.post(
  '/newImagesUpload',
  uploadMiddleware('campaign').array('images', 3),
  uploadMultipleImages
);

// Route to delete a file from Cloudinary
uploadRoute.delete('/deleteImage', deleteMedia);

export default uploadRoute;