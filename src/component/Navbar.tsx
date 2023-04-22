import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game_hub_logo_1_4x.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="70px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
