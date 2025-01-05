import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/Hooks/usePlatform";
import usePlatforms from "@/Hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
