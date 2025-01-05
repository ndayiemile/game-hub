import useGenres from "@/Hooks/useGenres";
import useGameQueryStore from "@/store";
import { Heading, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" my={3}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                css={{
                  _hover: { cursor: "pointer", textDecoration: "underline" },
                }}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
