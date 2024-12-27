import { For } from "@chakra-ui/react";
import useGames from "@/Hooks/useGames";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p>{error}</p>}
      <For each={games}>{(game) => <li key={game.id}>{game.name}</li>}</For>
    </div>
  );
};

export default GameGrid;
