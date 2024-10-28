import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Campaign from "../models/Campaign";
import validateMongoDbId from '../utils/validateMongodbId';

// Function to create new campaign
export const createCampaign = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Check if the category is already registered
    const alreadyExist = await Campaign.findOne({ campaignName: req.body.campaignName });

    // If already registered
    if (alreadyExist) {
        res.status(409).json({ message: "Campaign Already Exists!" });
        return;
    }

    try {
        // Create a new campaign
        const newCampaign = new Campaign(req.body);
        const campaignSaved = await newCampaign.save();
        console.log(campaignSaved);

        // Respond with success message and created campaign details
        res.status(201).json({
            message: 'Campaign created successfully',
            campaignSaved
        });
    } catch (error) {
        console.error('Error creating campaign:', error);
        res.status(500).json({ message: 'Failed to create campaign' });
    }
});


// Function to get all campaigns
export const getCampaigns = asyncHandler(async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        res.status(500).json({ message: 'Failed to fetch campaigns' });
    }
})


// Function to get single category
export const getCampaign = asyncHandler(async (req, res) => {

})

export const updateCampaign = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body, { 
            new: true 
        });
        if (!updatedCampaign) {
            res.status(404).json({ message: 'Campaign not found' });
            return;
        }
        res.json({
            message: 'Campaign updated successfully',
            updatedCampaign
        });
    } catch (error) {
        console.error('Error updating campaign:', error);
        res.status(500).json({ message: 'Failed to update campaign' });
    }
})

export const deleteCampaign = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedCampaign = await Campaign.findByIdAndDelete(id);
        if (!deletedCampaign) {
            res.status(404).json({ message: 'Campaign not found' });
            return;
        }
        res.json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        console.error('Error deleting campaign:', error);
        res.status(500).json({ message: 'Failed to delete campaign' });
    }
})


