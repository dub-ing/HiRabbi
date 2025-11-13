import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useProfile() {
  const { isPending, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getCurrentUser,
  });

  return {
    isPending,
    profile,
    isAuthenticated: profile?.role === "authenticated",
  };
}
