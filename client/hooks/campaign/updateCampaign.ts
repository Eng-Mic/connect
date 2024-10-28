import { API_Request } from "@/lib/requestController";
import { Campaign } from "@/types/campaignTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Update a campaign
export const useUpdateCampaign = (campaignId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedData: Partial<Campaign>) => {
      const { data } = await API_Request.put<{ updatedCampaign: Campaign }>(`/campaign/updateCampaign/${campaignId}`, updatedData);
      return data.updatedCampaign;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      toast.success('Campaign updated successfully');
    },
    onError: (error) => {
      toast.error(`Campaign Update Failed: ${error.message}`);
    },
  });
};