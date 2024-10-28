import { useMutation } from '@tanstack/react-query';
import { API_Request } from "@/lib/requestController";
import { IUserInput } from '@/types/userTypes';
import toast from 'react-hot-toast';

interface GoogleOAuthResponse {
  message: string;
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
}

export const useGoogleOAuth = () => {
  return useMutation({
    mutationFn: async (data: { code: string; location: string }) => {
      const response = await API_Request.post<GoogleOAuthResponse>('/api/oauth/google', data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(`Google OAuth failed: ${error.message}`);
    },
  });
};
