import { API_Request } from "@/lib/requestController";
import { Campaign } from "@/types/campaignTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Create a new campaign
export const useCreateCampaign = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (campaignData: Partial<Campaign>) => {
            const { data } = await API_Request.post<{ newCampaign: Campaign }>('/campaign/createCampaign', campaignData);
            return data.newCampaign;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['campaigns'] });
            toast.success('Campaign created successfully');
        },
        onError: (error: any) => {
            toast.error(`Campaign Creation Failed: ${error.message}`);
        },
    });
};