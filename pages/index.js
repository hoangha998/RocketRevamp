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
  Text,
} from "@chakra-ui/react";

import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import Category from "./components/Category";
import BudgetBar from "./components/BudgetBar";
import Cart from "./components/Cart";
import { useContext, useState } from "react";
import clientPromise from "../lib/mongodb";

import CartTotalContext from "./context/CartTotalProvider";

function Home({ items }) {
  const formBackground = useColorModeValue("gray.700");
  const [password, setPassword] = useState("");

  let items_dict = {
    "Launch Port Rentals": [],
    "Delta Pneumatics®": [],
    "Intergalactic Paper Products®": [],
    "Stellar Adhesives®": [],
    "Mass Dynamics®": [],
    "Soaring Rocket Parts Plus®": [],
    "Your Commander": [],
  };
  for (let i = 0; i < items.length; i++) {
    items_dict[items[i].subcontractor].push(items[i]);
  }
  let categories = [
    "Launch Port Rentals",
    "Delta Pneumatics®",
    "Intergalactic Paper Products®",
    "Stellar Adhesives®",
    "Mass Dynamics®",
    "Soaring Rocket Parts Plus®",
    "Your Commander",
  ];

  function checkPassword(){
    console.log("Approved", password);
  }

  return (
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
            <BudgetBar />
            <Cart />
            <Flex gap="5" width="80%" m="auto">
              <Input
                type="password"
                width="80%"
                pr="5"
                placeholder="Enter code"
                required
                onChange={
                  (e)=>setPassword(e.currentTarget.value)
                }
              />
              <Button size="md" colorScheme="red" onClick={checkPassword}>
                Approve
              </Button>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("main");

  const items = await db.collection("items").find({}).toArray();

  return {
    props: { items: JSON.parse(JSON.stringify(items)) },
  };
}

export default Home;
