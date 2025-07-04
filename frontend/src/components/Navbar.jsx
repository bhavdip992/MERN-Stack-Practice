import {
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
        w={"100vh"}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {" "}
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
