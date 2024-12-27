import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import { HStack, Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Switch
        onChange={toggleColorMode}
        checked={colorMode === "dark"}
        colorPalette="black"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="gray.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
