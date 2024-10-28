// hooks/useLoginUser.ts
import { API_Request } from "@/lib/requestController";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface LoginUserParams {
    email: string;
    password: string;
}

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (credentials: LoginUserParams) => {
      const response = await API_Request.post('/auth/login-user', credentials);
      return response.data
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(`Error in logging in: ${error.message}`);
    },
  });
};
