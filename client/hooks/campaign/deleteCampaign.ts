import { API_Request } from "@/lib/requestController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Delete a campaign
export const useDeleteCampaign = (campaignId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await API_Request.delete(`/campaign/deleteCampaign/${campaignId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      toast.success('Campaign deleted successfully');
    },
    onError: (error) => {
      toast.error(`Campaign Deletion Failed: ${error.message}`);
    },
  });
};