import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import Screenshot from "@/entities/Screenshot";
const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    refetchOnWindowFocus: false,
  });
};
export default useScreenshots;
