import { create } from 'zustand';
import { Campaign } from '../../types/campaignTypes';

interface CampaignStore {
  campaigns: Campaign[];
  selectedCampaign: Campaign | null;
  setCampaigns: (campaigns: Campaign[]) => void;
  setSelectedCampaign: (campaign: Campaign | null) => void;
}

const useCampaignStore = create<CampaignStore>((set) => ({
  campaigns: [],
  selectedCampaign: null,
  setCampaigns: (campaigns) => set({ campaigns }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
}));

export default useCampaignStore;