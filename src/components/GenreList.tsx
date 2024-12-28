import useGenres from "@/Hooks/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "./image-url";
const GenreList = () => {
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
              css={{
                _hover: { cursor: "pointer", textDecoration: "underline" },
              }}
              onClick={() => console.log(genre)}
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
