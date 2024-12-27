import { For, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" gap={10}>
      {error && <p>{error}</p>}
      <For each={games}>{(game) => <GameCard key={game.id} game={game} />}</For>
    </SimpleGrid>
  );
};

export default GameGrid;
