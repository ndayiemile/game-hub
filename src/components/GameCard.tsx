import { Game } from "@/Hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Description>
          <HStack justifyContent="space-between" mb={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Card.Title fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Card.Title>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
