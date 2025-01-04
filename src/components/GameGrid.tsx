import { GameQuery } from "@/App";
import useGames from "@/Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  const skeletons = [1, 2, 3, 4, 5, 6];
  const showSkeletons = () => {
    return skeletons.map((Skeleton) => (
      <GameCardContainer key={Skeleton}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));
  };
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Fragment />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={3} gap={6}>
        {isLoading && showSkeletons()}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && showSkeletons()}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
