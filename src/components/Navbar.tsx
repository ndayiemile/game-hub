import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack px={3}>
      <Image src={logo} boxSize="60px" px={0} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
