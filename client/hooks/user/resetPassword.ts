// hooks/useResetPassword.ts
import { API_Request } from "@/lib/requestController";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface ResetPasswordParams {
  token: string;
  password: string;
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({ token, password }: ResetPasswordParams) => {
      await API_Request.post(`/auth/reset-password/${token}`, { password });
    },
    onSuccess: () => {
      toast.success('Password reset successfully!');
    },
    onError: (error: any) => {
      toast.error(`Failed to reset password: ${error.message}`);
    },
  });
};
