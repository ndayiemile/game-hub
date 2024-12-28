import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack px={3}>
      <Image src={logo} boxSize="60px" px={0} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
