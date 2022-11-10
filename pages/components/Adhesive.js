import {
  Heading,
  Input,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
  Box
} from "@chakra-ui/react";


import ItemCard from "./ItemCard";
// import Navbar from "./Navbar";
// import CartItem from "./CartItem";
export default function Adhesive() {
  return (
    <Box mt="100px">
      <Heading as="h2" noOfLines={1}>
        Adhesive
      </Heading>
      <Wrap>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
        <WrapItem>
          <ItemCard> </ItemCard>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
