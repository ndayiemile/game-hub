import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platform>("platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("platforms/lists/parents")
        .then((res) => res.data),
    refetchOnMount: false,
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
