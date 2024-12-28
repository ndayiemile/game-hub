import { For, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" gap={10}>
      {isLoading &&
        skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
      {error && <p>{error}</p>}
      <For each={games}>{(game) => <GameCard key={game.id} game={game} />}</For>
    </SimpleGrid>
  );
};

export default GameGrid;
