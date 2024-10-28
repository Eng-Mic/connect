import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { v2 as cloudinary } from 'cloudinary';
import { UploadedFile } from 'express-fileupload';


// Function to handle multiple image upload
export const uploadMultipleImages = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.files || !Array.isArray(req.files.files)) {
            // No file was uploaded
            res.status(400).json({ error: "No files uploaded" });
            return;
        }

        const files = req.files.files as UploadedFile[];
        // Array to store transformed image URLs
        const uploadedImages: Array<{ public_id: string; url: string, resource_type: string }> = [];

        // Process each uploaded image
        for (const file of files) {
            try {
                // Transformation: Remove background and optimize image
                const image = await cloudinary.uploader.upload(file.tempFilePath, {
                    resource_type: "image",
                    public_id: `images/${Date.now()}_${file.name}`,
                    dpr: "auto",
                    responsive: true,
                    width: "auto",
                    quality: 'auto:good', // Auto optimization
                });

                uploadedImages.push({
                    public_id: image.public_id,
                    url: image.secure_url,
                    resource_type: image.resource_type
                });
            } catch (error) {
                console.error(`Error processing file ${file.name}:`, (error as Error).message);
            }
        }

        console.log(uploadedImages);
        res.json({
            success: true,
            images: uploadedImages,
        });
    } catch (error) {
        console.error('Error uploading images:', (error as Error).message);
        res.status(500).json({ error: (error as Error).message });
    }
});

// Function to handle video upload
export const uploadVideo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.files || !req.files.video) {
            // No file was uploaded
            res.status(400).json({ error: "No video uploaded" });
            return;
        }

        const video = req.files.video as UploadedFile;

        const uploadedVideo = await cloudinary.uploader.upload(video.tempFilePath, {
            resource_type: "video",
            public_id: `videos/${Date.now()}_${video.name}`,
            chunk_size: 6000000, // 6MB chunk size
            eager: [
                { width: 300, height: 300, crop: "pad" },
                { width: 160, height: 100, crop: "crop", gravity: "south" }
            ],
        });

        res.json({
            success: true,
            public_id: uploadedVideo.public_id,
            url: uploadedVideo.secure_url,
            resource_type: uploadedVideo.resource_type
        });
    } catch (error) {
        console.error('Error uploading video:', (error as Error).message);
        res.status(500).json({ error: (error as Error).message });
    }
});

// Function to handle the deletion of an image or video
export const deleteMedia = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        const { public_id, resource_type = "image" } = req.body; // Default to "image" if resource_type is not provided

        // Ensure the resource_type is either "image" or "video"
        if (!["image", "video"].includes(resource_type)) {
            res.status(400).json({ error: "Invalid resource type. Must be 'image' or 'video'." });
            return;
        }

        // Perform deletion
        const result = await cloudinary.uploader.destroy(public_id, { resource_type });
        
        res.status(200).json({ 
            success: true, 
            result 
        });
    } catch (error) {
        console.error('Error deleting media:', (error as Error).message);
        res.status(500).json({ success: false, error: (error as Error).message });
    }
});