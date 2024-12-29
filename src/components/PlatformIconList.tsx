import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/Hooks/useGames";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <Flex>
      {platforms.map((platform) => (
        <Box key={platform.id}>
          <Text
            key={platform.id}
            as={iconMap[platform.slug]}
            fontSize="2xl"
            color="gray.500"
          ></Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PlatformIconList;
