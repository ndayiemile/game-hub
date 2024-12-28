import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
