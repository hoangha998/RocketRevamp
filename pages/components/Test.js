import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  chakra,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Grid,
  GridItem,
  Image,
  Heading,
  Stack,
  Text,
  Link,
  Select,
  SelectProps,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import CartTotalContext from "../context/CartTotalProvider";
import { useContext, useState } from "react";
import CartItemsContext from "../context/CartItemsProvider";

export default function Test(props) {
  const IMAGE =
    "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";

    const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  let cartItemsIds = Object.keys(cartItems);

  let quantity = cartItems[props.item._id].quantity;
  // if (cartItems[props.item._id] != undefined)
  //   quantity = cartItems[props.item._id].quantity;
  const toast = useToast();

  let itemTotal = props.item.price * quantity;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addTotal = (newItemTotal) => {
    setCartTotal(cartTotal + newItemTotal);
  };

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  };

  function setQuantity(num) {
    let copyCartItems = { ...cartItems };
    copyCartItems[props.item._id].quantity = num;
    setCartItems(copyCartItems);
  }

  function increment() {
    if (cartTotal + props.item.price > 1000000) {
      toast({
        title: "Insufficent Funds",
        description: "You do not have enough money for this item",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setQuantity(quantity + 1);
    let curTotal = (quantity + 1) * props.item.price;
    addTotal(props.item.price);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      let curTotal = (quantity - 1) * props.item.price;
      subTotal(props.item.price);
    } else {
      deleteItem(props.item._id);
    }
    // else delete this cart item from cart
  }

  function deleteItem(item_id) {
    for (let i = 0; i < cartItemsIds.length; i++) {
      if (cartItemsIds[i] == item_id) {
        setCartTotal(cartTotal - quantity * props.item.price);
        let copyCartItems = { ...cartItems };
        delete copyCartItems[cartItemsIds[i]];
        setCartItems(copyCartItems);
        break;
      }
    }
  }

  let show = "show";
  if (cartTotal >= 1000000) {
    show = "none";
  }

  return (
    <Flex
      width="80%"
      height="120px"
      float="left"
      bg={useColorModeValue("white", "gray.900")}
      rounded="lg"
      mb="5"
    >
      <Box>
        <Image rounded={"lg"} height={"120px"} width={"140px"} src={props.item.image_link} />
      </Box>
      <Stack pl="2">
        <Text as="h4" fontWeight="400">
          {props.item.name}
        </Text>
        <Text
          as="span"
          fontSize="12px"
          fontWeight="300"
          color={useColorModeValue("white", "green.300")}
        >
          {formatter.format(props.item.price).slice(0, -3)}
          <Text as="span" fontWeight="200" fontSize="12px" color="gray.500">
                /unit
              </Text>
        </Text>
        <Flex m="auto" align="center" position="relative" bottom="2px" >
          <Text pr="1" onClick={decrement} cursor="pointer">-</Text>
          <Text border="1px solid white" rounded="md" pt="1" pb="1" pr="4" pl="4">
            {quantity}
          </Text>
          <Text pl="1" display={show}
                onClick={increment}>+</Text>
        </Flex>
      </Stack>
      <Stack>
        <CloseButton
          position="relative"
          left="55%"
          bottom="0"
          onClick={function () {
            deleteItem(props.item._id);
          }}
        />
        <Box position="relative" top="20px" right="15px" border="1px solid green" rounded="md" p="1" color={useColorModeValue("white", "green.300")}>{formatter.format(itemTotal).slice(0, -3)}</Box>
      </Stack>
    </Flex>
  );
}
