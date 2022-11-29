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
  useColorModeValue,
} from "@chakra-ui/react";
import CartTotalContext from "../../context/CartTotalProvider";
import { useContext, useState } from "react";
import CartItemsContext from "../../context/CartItemsProvider";
import ApprovedItemsContext from "../../context/ApprovedItemsProvider";

const IMAGE = "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
// let quantity = 2;

export default function ApprovedItems(props) {

  let id = 0;
  let price = 0;
  let image_link = '';
  let name = '';
  let editMode = false;
  let quantity = 0;
  if (props.item != undefined) {
    id = props.item._id;
    price = props.item.price;
    image_link = props.item.image_link;
    name = props.item.name;
  }
  if (props.editMode != undefined) {
    editMode = props.editMode;
  }

  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [approvedItems, setApprovedItems] = useContext(ApprovedItemsContext);

  let cartItemsIds = Object.keys(cartItems);
  let approvedItemsIds = Object.keys(approvedItems);

  const [password, setPassword] = useState("");
  if (approvedItems[id] != undefined)
    quantity = approvedItems[id].quantity;
  const toast = useToast();

  let itemTotal = price * quantity;
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
    let copyApprovedItems = { ...approvedItems };
    copyApprovedItems[id].quantity = num;
    setApprovedItems(copyApprovedItems);
  }

  function increment() {
    if (cartTotal + price > 1000000) {
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
    let curTotal = (quantity + 1) * price;
    addTotal(price);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      let curTotal = (quantity - 1) * price;
      subTotal(price);
    } else {
      deleteItem(id);
    }
  }

  function deleteItem(item_id) {
    for (let i = 0; i < approvedItemsIds.length; i++) {
      if (approvedItemsIds[i] == item_id) {
        setCartTotal(cartTotal - quantity * price);
        let copyApprovedItems = { ...approvedItems };
        delete copyApprovedItems[approvedItemsIds[i]];
        setApprovedItems(copyApprovedItems);
        break;
      }
    }
  }

  let showInc = "none";
  let showDec = "none";
  if (editMode) {
    if (cartTotal >= 1000000) {
      showInc = "none";
    } else {
      showInc = "show";
    }
    showDec = "show";
  }

  return (
    <Flex
      width="80%"
      height="125px"
      float="left"
      bg={useColorModeValue("white", "gray.900")}
      rounded="lg"
      mb="5"
      justifyContent="space-around"
    >
      <Box display="flex" width="125px"  float="left" >
        <Image
          rounded={"lg"}
          height={"125px"}
          width={"125px"}
          src={image_link}
        />
      </Box>
      <Stack pl="2" width="105px" justifyContent="space-around">
        <Text as="h4" fontWeight="400">
          {name}
        </Text>
        <Text
          as="span"
          fontSize="12px"
          fontWeight="300"
          color={useColorModeValue("white", "green.300")}
        >
          {formatter.format(price).slice(0, -3)}
          <Text as="span" fontWeight="200" fontSize="12px" color="gray.500">
            /unit
          </Text>
        </Text>
        <Flex m="auto" align="center" position="relative" bottom="2px">
          <Text pr="1" onClick={decrement} cursor="pointer" display={showDec}>
            -
          </Text>
          <Text
            border="1px solid white"
            rounded="md"
            pt="1"
            pb="1"
            pr="4"
            pl="4"
          >
            {quantity}
          </Text>
          <Text pl="1" display={showInc} onClick={increment} cursor="pointer">
            +
          </Text>
        </Flex>
      </Stack>
      <Stack display="flex" width="auto" m="auto" h="120px" justifyContent="center">
        <CloseButton
          position="relative"
          width="75px"
          left="30px"
          bottom="20px"
          display={showDec}
          onClick={function () {
            deleteItem(id);
          }}
        />
        <Box
          position="relative"
          top="20px"
          right="5px"
          border="1px solid green"
          rounded="md"
          p="1"
          textAlign="center"
          color={useColorModeValue("white", "green.300")}
        >
          {formatter.format(itemTotal).slice(0, -3)}
        </Box>
      </Stack>
    </Flex>
  );
}
