// hooks/useDeleteUser.ts
import { API_Request } from "@/lib/requestController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteUser = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await API_Request.delete(`/auth/delete-user/${userId}`, { withCredentials: true });
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(`User Deletion Failed: ${error.message}`);
    },
  });
};
