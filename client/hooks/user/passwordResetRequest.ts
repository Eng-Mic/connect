// hooks/useForgotPassword.ts
import { API_Request } from "@/lib/requestController";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useForgotPasswordResetRequest = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      await API_Request.post('/auth/forgot-password-request', { email });
    },
    onSuccess: () => {
      toast.success('Password reset link sent! Check your email.');
    },
    onError: (error: any) => {
      toast.error(`Failed to send password reset link: ${error.message}`);
    },
  });
};
