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
import CartTotalContext from '../context/CartTotalProvider'
import {useContext, useState} from "react";
import CartItemsContext from '../context/CartItemsProvider'

const IMAGE = "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
// let quantity = 2;

export default function CartItem(props) {

  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  let cartItemsIds = Object.keys(cartItems);

  let quantity = cartItems[props.item._id].quantity;
  // if (cartItems[props.item._id] != undefined)
  //   quantity = cartItems[props.item._id].quantity;
  const toast = useToast();


  let itemTotal = props.item.price * quantity;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const addTotal = (newItemTotal) =>{
    setCartTotal(cartTotal + newItemTotal);
  }

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  }

  function setQuantity(num) {
    let copyCartItems = {...cartItems};
    copyCartItems[props.item._id].quantity = num;
    setCartItems(copyCartItems);
  }

  function increment() {
    if(cartTotal + props.item.price > 1000000){
      toast({
        title: 'Insufficent Funds',
        description: 'You do not have enough money for this item',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setQuantity(quantity + 1)
    let curTotal = (quantity+1) * props.item.price
    addTotal(props.item.price)
  }

  function decrement() {
    if(quantity > 1){
      setQuantity(quantity - 1)
      let curTotal = (quantity-1) * props.item.price
      subTotal(props.item.price)
    }
    else {
      deleteItem(props.item._id)
    }
    // else delete this cart item from cart

  }


  function deleteItem(item_id){
    for(let i=0; i<cartItemsIds.length;i++) {
      if (cartItemsIds[i] == item_id) {
        setCartTotal(cartTotal - quantity*props.item.price);
        let copyCartItems = {...cartItems};
        delete copyCartItems[cartItemsIds[i]];
        setCartItems(copyCartItems);
        break;
      }
    }
  }

  let show = "show";
  if (cartTotal >= 1000000){
    show = "none";
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
              {formatter.format(props.item.price).slice(0,-3)}
              <Text as="span" fontWeight="200" fontSize="12px" color="gray.500">
                /unit
              </Text>
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
              <Text p="2" fontSize="20" onClick={decrement} cursor="pointer">
                -
              </Text>
              <Text
                border="1px"
                borderColor="gray"
                pt="1"
                pb="1"
                pr="4"
                pl="4"
                rounded="md"
                fontSize="15"
              >
                {quantity}
              </Text>
              <Text p="2" fontSize="20" cursor="pointer" display={show} onClick={increment}>
                +
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box width="30%" height="auto">
          <CloseButton position="relative" left="90px" bottom="0" onClick={function() {deleteItem(props.item._id)}}/>
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
              {formatter.format(itemTotal).slice(0,-3)}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
