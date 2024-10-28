import { API_Request } from "@/lib/requestController";
import { IUser } from "@/types/userTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetUsers = () => {
  const { data, isError, error } = useQuery({
    queryFn: async () => {
      const { data } = await API_Request.get<IUser[]>("/user/get-all-users");
      return data;
    },
    queryKey: ["users"],
  });

  useEffect(() => {
    if (isError) {
      toast.error(`Failed to fetch users: ${error.message}`);
    }
  }, [isError, error]);

  return { data, isError, error };
};