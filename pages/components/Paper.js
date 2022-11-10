import {
    Flex,
    Heading,
    Input,
    Button,
    Grid,
    GridItem,
    useColorMode,
    useColorModeValue,
    Wrap,
    WrapItem,
    Box,
    Progress,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
  } from "@chakra-ui/react";
  
  
  import ItemCard from "./ItemCard";
  import Navbar from "./Navbar";
  import CartItem from "./CartItem";
  export default function Paper() {
    return (
      <Box>
        <Heading as="h2" noOfLines={1}>
          {" "}
          Paper{" "}
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
  