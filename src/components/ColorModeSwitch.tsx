import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack px={3}>
      <Switch
        onChange={toggleColorMode}
        checked={colorMode === "dark"}
        colorPalette="black"
        whiteSpace="nowrap"
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
        <Text hideBelow="md">Dark Mode</Text>
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
