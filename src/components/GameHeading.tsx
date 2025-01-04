import { GameQuery } from "@/App";
import useGenre from "@/Hooks/useGenre";
import usePlatform from "@/Hooks/usePlatform";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" lineHeight="120%" my="7">
      {heading}
    </Heading>
  );
};

export default GameHeading;
