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

import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import Category from "./components/Category";
import Cart from "./components/Cart"
import {useState} from "react";
import clientPromise from "../lib/mongodb";

function Home({items}) {
  const formBackground = useColorModeValue("gray.700");

  
  console.log(items)

  let items_dict = {
    'Launch Port Rentals': [],
    'Delta Pneumatics®': [],
    'Intergalactic Paper Products®': [],
    'Stellar Adhesives®': [],
    'Mass Dynamics®': [],
    'Soaring Rocket Parts Plus®': [],
    'Your Commander': []
  };
  for (let i=0; i<items.length; i++){
    items_dict[items[i].subcontractor].push(items[i])
  }
  let categories = ['Launch Port Rentals',
  'Delta Pneumatics®',
  'Intergalactic Paper Products®',
  'Stellar Adhesives®',
  'Mass Dynamics®',
  'Soaring Rocket Parts Plus®',
  'Your Commander'];


//  console.log("CartTotal:", cartTotal)

  return (
    <Flex>
      <Box width="100%">
        <Navbar />
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Box width="100%" margin="10">
              {categories.map((cat) => (
                <Category items={items_dict[cat]} category={cat} />
              ))}

            </Box>
          </GridItem>
          <GridItem colStart={4} colEnd={6} float="right">
            <Box
              width="30%"
              padding="5"
              float="right"
              position="fixed"
              top="20"
              right="50"
              height="100vh"
            >
              <Box width="80%" margin="auto" pb="20px">
                <Heading
                  as="h2"
                  fontSize="32px"
                  fontWeight="1"
                  padding="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  {" "}
                  Budget Bar{" "}
                </Heading>
                <Progress
                  colorScheme="green"
                  height="30px"
                  value={50}
                  rounded="full"
                />
              </Box>
              <Box
                width="50%"
                display="flex"
                margin="auto"
                justifyContent="center"
                alignItems="center"
                pb="15px"
              >
                <Box
                  width="160px"
                  bg="blue.900"
                  p="4"
                  color="white"
                  rounded="md"
                  fontWeight="medium"
                  display="flex"
                  float="right"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="md" as="span">
                    Total:
                  </Text>
                  {/* <Text>$350,000</Text> */}
                  <Text>{10000}</Text>
                </Box>
              </Box>

              <Cart/>

            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("main");

  const items = await db
      .collection("items")
      .find({})
      .toArray();

  return {
      props: { items: JSON.parse(JSON.stringify(items)) }
    }
}

export default Home
