import { API_Request } from "@/lib/requestController";
import useCampaignStore from "@/stores/Campaign/campaignStore";
import { Campaign } from "@/types/campaignTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetCampaigns = () => {
  const setCampaigns = useCampaignStore((state) => state.setCampaigns);

  const { data, isError, error } = useQuery({
    queryFn: async () => {
      const { data } = await API_Request.get<Campaign[]>("/campaign/getCampaigns");
      return data;
    },
    queryKey: ['campaigns'],
  });

  useEffect(() => {
    if (data) {
      setCampaigns(data);
      toast.success('Campaigns fetched successfully.');
    }
  }, [data, setCampaigns]);

  useEffect(() => {
    if (isError) {
      toast.error(`Failed to fetch campaigns: ${error.message}`);
    }
  }, [isError, error]);

  return { data, isError, error };
};
