import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "./hooks/Platform";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    nintendo: SiNintendo,
    web: BsGlobe,
    phone: MdPhoneIphone,
    Linux: FaLinux,
    android: FaAndroid,
    apple: FaApple,
    xbox: FaXbox,
    playstation: FaPlaystation,
    windows: FaWindows,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon color="gray.500" as={iconMap[platform.slug]}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
