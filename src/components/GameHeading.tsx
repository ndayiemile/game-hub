import { GameQuery } from "@/App";
import useGenres from "@/Hooks/useGenres";
import usePlatforms from "@/Hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" lineHeight="120%" my="7">
      {heading}
    </Heading>
  );
};

export default GameHeading;
