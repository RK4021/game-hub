import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game_hub_logo_1_4x.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="70px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
