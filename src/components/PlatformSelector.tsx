import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/Hooks/usePlatforms";
const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
