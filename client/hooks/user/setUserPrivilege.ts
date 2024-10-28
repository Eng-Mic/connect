import { API_Request } from "@/lib/requestController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface PrivilegeParams {
  id: string;
  role: string;
}

export const usePrivilege = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, role }: PrivilegeParams) => {
            const response = await API_Request.put(`/user/set-privilege/${id}`, { role });
            return response.data;
        },
        onSuccess: (data) => {
            // Replace 'user' with the appropriate key
            queryClient.invalidateQueries({ queryKey: ['user', data._id] });
            toast.success('User privileges updated successfully!');
        },
        onError: (error: any) => {
            toast.error(`Failed to update user privileges: ${error.message}`);
        },
    });
};
