// hooks/useUpdateUser.ts
import { API_Request } from "@/lib/requestController";
import { IUser } from "@/types/userTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateUser = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: Partial<IUser>) => {
      const { data } = await API_Request.put<{ updatedUser: IUser }>(`/auth/update-user/${userId}`, userData, { withCredentials: true });
      return data.updatedUser;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      toast.success('User updated successfully');
    },
    onError: (error: any) => {
      toast.error(`User Update Failed: ${error.message}`);
    },
  });
};
