import { API_Request } from "@/lib/requestController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUnSuspendUser = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await API_Request.put(`/auth/unsuspend-user/${userId}`, null, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(`User unSuspension failed: ${error.message}`);
    },
  });
};