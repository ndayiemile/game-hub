import useGenre from "@/Hooks/useGenre";
import usePlatform from "@/Hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";
const GameHeading = () => {
  const [genreId, platformId] = useGameQueryStore((s) => [
    s.gameQuery.genreId,
    s.gameQuery.platformId,
  ]);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" lineHeight="120%" my="7">
      {heading}
    </Heading>
  );
};

export default GameHeading;
