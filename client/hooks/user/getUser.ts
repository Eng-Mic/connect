// hooks/useGetUser.ts
import { API_Request } from "@/lib/requestController";
import { IUser } from "@/types/userTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetUser = (userId: string) => {
  const { data, isError, error } = useQuery({
    queryFn: async () => {
      const { data } = await API_Request.get<IUser>(`/user/get-user/${userId}`);
      return data;
    },
    queryKey: ['user', userId],
  });

  useEffect(() => {
    if (isError) {
      toast.error(`Failed to fetch user: ${error.message}`);
    }
  }, [isError, error]);

  return { data, isError, error };
};
