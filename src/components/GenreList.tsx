import useGenres, { Genre } from "@/Hooks/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "./image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              css={{
                _hover: { cursor: "pointer", textDecoration: "underline" },
              }}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
