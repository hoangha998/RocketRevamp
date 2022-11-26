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
} from "@chakra-ui/react";
import CartTotalContext from '../context/CartTotalProvider'
import {useContext, useState} from "react";

const IMAGE = "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
// let quantity = 2;

export default function CartItem(props) {

  const [cartTotal, setCartTotal] = useContext(CartTotalContext)
  const [quantity, setQuantity] = React.useState(1);

  const addTotal = (newItemTotal) =>{
    setCartTotal(cartTotal + newItemTotal);
  }

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  }

  function increment() {
    setQuantity(quantity + 1)
    let curTotal = (quantity+1) * props.item.price
    addTotal(props.item.price)
  }

  function decrement() {
    if(quantity > 0){
      setQuantity(quantity - 1)
      let curTotal = (quantity+1) * props.item.price
      subTotal(props.item.price)
    }
    // else delete this cart item from cart

  }

  return (
    <Box pb="5">
      <Box
        width="100%"
        height="auto"
        background="#171923"
        rounded="lg"
        justify="space-between"
        display="flex"
      >
        <Box width="120px" display="flex" alignItems="center" float="left">
          <Image rounded={"lg"} height={"125px"} width={"auto"} src={props.item.image_link} />
        </Box>
        <Box width="150px" direction="column" textAlign="center" float="left">
          <Box>
            <Heading fontSize="24px" fontWeight="400" pt="5px" height="50%">
              {props.item.name}
            </Heading>
          </Box>
          <Box
            width="100px"
            margin="auto"
            display="flex"
            textAlign="center"
            alignItems="center"
            pt="5px"
            justify="center"
          >
            <Text fontWeight="Bold" color="green.400">
              {props.item.price}
              {/* <Text as="span" fontWeight="100" color="gray.500">
                {" "}
                item
              </Text> */}
            </Text>
          </Box>
          <Box
            width="100px"
            height="auto"
            margin="auto"
            display="flex"
            alignItems="center"
            justify="center"
            mt="10px"
          >
            <Flex width="100px" margin="auto" align="center">
              <Text p="2" onClick={decrement} cursor="pointer">
                -
              </Text>
              <Text
                border="1px"
                borderColor="gray"
                pt="2"
                pb="2"
                pr="5"
                pl="5"
                rounded="md"
                fontSize="12"
              >
                {quantity}
              </Text>
              <Text p="2" cursor="pointer" onClick={increment}>
                +
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box width="30%" height="auto">
          <CloseButton position="relative" left="90px" bottom="0" />
          <Box
            position="relative"
            left="0"
            top="12"
            border="1px solid #784203"
            background="#A0FFF0"
            rounded="lg"
            p="px"
            textAlign="center"
            mr="10px"
          >
            <Text fontWeight="500" color="black">
              {props.item.price * quantity}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
