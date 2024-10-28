// hooks/useConfirmEmail.ts
import { API_Request } from "@/lib/requestController";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useVerifyUser = () => {
  return useMutation({
    mutationFn: async (token: string) => {
      const { data } = await API_Request.post(`/auth/verify-account/${token}`);
      // Save user data to local storage or state
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    },
    onSuccess: () => {
      toast.success('Account confirmed successfully!');
    },
    onError: (error: any) => {
      toast.error(`Account confirmation failed: ${error.message}`);
    },
  });
};
