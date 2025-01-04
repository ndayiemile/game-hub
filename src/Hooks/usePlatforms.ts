import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";
const apiClient = new APIClient<Platform>("platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    refetchOnMount: false,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: platforms,
    refetchOnWindowFocus: false,
  });
export default usePlatforms;
