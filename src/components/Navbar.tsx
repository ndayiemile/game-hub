import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
