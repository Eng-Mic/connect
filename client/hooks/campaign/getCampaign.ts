// 'use client'

import { API_Request } from "@/lib/requestController";
import useCampaignStore from "@/stores/Campaign/campaignStore";
import { Campaign } from "@/types/campaignTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

// Fetch a single campaign
export const useGetCampaign = (campaignId: string) => {
  const setSelectedCampaign = useCampaignStore((state) => state.setSelectedCampaign);

  const { data, isError, error } = useQuery({
    queryFn: async () => {
      const { data } = await API_Request.get<Campaign>(`/campaign/getCampaign/${campaignId}`);
      return data;
    },
    queryKey: ['campaign', campaignId],
  });

  useEffect(() => {
    if (data) {
      setSelectedCampaign(data);
      toast.success('Campaign fetched successfully.');
    }
  }, [data, setSelectedCampaign]);

  useEffect(() => {
    if (isError) {
      toast.error(`Failed to fetch campaign: ${error.message}`);
    }
  }, [isError, error]);

  return { data, isError, error };
};