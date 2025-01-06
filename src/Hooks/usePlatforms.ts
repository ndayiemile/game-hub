import platforms from "@/data/platforms";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>("platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    refetchOnMount: false,
    staleTime: ms("1d"), //24 hrs
    initialData: platforms,
    refetchOnWindowFocus: false,
  });
export default usePlatforms;
