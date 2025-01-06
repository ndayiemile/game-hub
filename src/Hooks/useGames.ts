import { Platform } from "@/Hooks/usePlatforms";
import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    refetchOnWindowFocus: false,
    staleTime: ms("1d"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
