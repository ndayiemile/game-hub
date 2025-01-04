import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";
const apiClient = new APIClient<Platform>("platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platform>("platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    refetchOnMount: false,
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
