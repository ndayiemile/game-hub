import { GameQuery } from "@/App";
import useGenres from "@/Hooks/useGenres";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${gameQuery.platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading fontSize="5xl" lineHeight="120%" my="7">
      {heading}
    </Heading>
  );
};

export default GameHeading;
