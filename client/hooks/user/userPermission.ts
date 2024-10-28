// hooks/useUpdateUserPermissions.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { API_Request } from '@/lib/requestController';

interface UpdatePermissionsParams {
    userId: string;
    permissions: string[];
}

export const useSetPermissions = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (permissions: string[]) => {
      const { data } = await API_Request.put<{ updatedUser: UpdatePermissionsParams }>(`/auth/setPermissions/${userId}`, { permissions }, { withCredentials: true });
      return data.updatedUser;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      toast.success('Permissions updated successfully');
    },
    onError: (error: any) => {
      toast.error(`Update Permissions Failed: ${error.message}`);
    },
  });
};
