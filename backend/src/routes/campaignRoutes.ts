import express from 'express';
import { createCampaign, deleteCampaign, getCampaign, getCampaigns, updateCampaign } from '../controllers/campaignController';

const campaignRouter = express.Router() // Initialing campaignRoutes

// campaign Routes Endpoints
campaignRouter.post("/createCampaign", createCampaign); // Create new campaign

// Get all campaigns
campaignRouter.get("/getCampaigns", getCampaigns);

// Get single campaign
campaignRouter.get("/getCampaign/:id", getCampaign)

// Update campaign
campaignRouter.put("/updateCampaign/:id", updateCampaign);

// Delete campaign
campaignRouter.delete("/deleteCampaign/:id", deleteCampaign)

export default campaignRouter;