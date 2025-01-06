import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <HStack px={3}>
      <Link to="/">
        <Image src={logo} boxSize="60px" px={0} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
