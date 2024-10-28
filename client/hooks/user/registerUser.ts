// hooks/useRegisterUser.ts
import { API_Request } from "@/lib/requestController";
import { IUserInput } from "@/types/userTypes";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (userData: IUserInput) => {
      await API_Request.post('/auth/register-user', userData);
    },
    onSuccess: () => {
      toast.success('Registration successful! Check your email for verification.');
    },
    onError: (error: any) => {
      toast.error(`Registration failed: ${error.message}`);
    },
  });
};
