// hooks/useLogoutUser.ts
import { API_Request } from "@/lib/requestController";
import useUserState from "@/stores/AuthUser";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLogoutUser = () => {
    const { logout: setLogout } = useUserState(state => ({
        logout: state.logout
    }));
    
    return useMutation({
        mutationFn: async () => {
            // Call API to log out and set isVerified to false
            const response = await API_Request.post('/auth/logout-user', { withCredentials: true });
            return response.data;
        },
        onSuccess: (data) => {
            // Clear user state and local storage on successful logout
            setLogout(); // This clears the Zustand state and local storage
            toast.success(data.message);
            window.location.href = '/sign-in'; // Redirect to login page
        },
            onError: (error: any) => {
            toast.error(`Logout failed: ${error.message}`);
        },
    });
};
