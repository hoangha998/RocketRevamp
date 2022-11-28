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
import clientPromise from "../lib/mongodb";

import { useContext, useState } from "react";
import { setCookie, getCookie, hasCookie } from 'cookies-next';
import CartTotalContext from "./context/CartTotalProvider";
import CartItemsContext from "./context/CartItemsProvider";
import ApprovedItemsContext from "./context/ApprovedItemsProvider";
import { useEffect } from 'react';

function Home({ items }) {

  // check for cookies
  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [approvedItems, setApprovedItems] = useContext(ApprovedItemsContext);
  if (hasCookie('cartTotal')) {
    let cookie_cartTotal = parseInt(getCookie('cartTotal'));
    setCartTotal(cookie_cartTotal);
  }
  useEffect(() => {
  if (hasCookie('cartItems')) {
    let cookie_cartItems = JSON.parse(getCookie('cartItems'));
    setCartItems(cookie_cartItems, false);
    console.log("has cookie");
  }
  }, []);
  if (hasCookie('approvedItems')) {
    let cookie_approvedItems = JSON.parse(getCookie('approvedItems'));
    setApprovedItems(cookie_approvedItems);
  }

  const formBackground = useColorModeValue("gray.700");

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



  return (
    <Box width="100%" >
      <Navbar />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={3}>
          <Box width="100%" margin="10">
            {categories.map((cat) => (
              <Category items={items_dict[cat]} category={cat} />
            ))}
          </Box>
        </GridItem>

        <GridItem colStart={4} colEnd={6} float="right" height="80vh"
        >
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
