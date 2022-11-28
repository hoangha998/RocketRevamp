import {
  Box,
  Center,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import CartItemsContext from "../context/CartItemsProvider";
import CartTotalContext from "../context/CartTotalProvider";
import { useContext, useState } from "react";

export default function ItemCard(props) {
  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  let cartItemsIds = Object.keys(cartItems);
  const toast = useToast();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addItem = (item) => {
    let alreadyAdded = false;
    for (let i = 0; i < cartItemsIds.length; i++) {
      if (item._id == cartItemsIds[i]) {
        alreadyAdded = true;
        toast({
          title: "Cannot add item",
          description: 'Item "' + item.name + '" is already in your cart!',
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        break;
      }

      if (1000000 < cartTotal + item.price) {
        toast({
          title: "Insufficent Funds",
          description: "You do not have enough money for this item",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    }
    if (!alreadyAdded) {
      let copyCartItems = { ...cartItems };
      copyCartItems[props.item._id] = { item: item, quantity: 1 };
      setCartItems(copyCartItems);
      setCartTotal(cartTotal + item.price);
    }
  };

  const IMAGE =
    "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"160px"}
        height={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        mr="5"
      >
        <Box
          rounded={"lg"}
          mt={-10}
          pos={"relative"}
          height={"110px"}
          width="110px"
    
          textAlign="center"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(5px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(15px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={"110px"}
            width="110px"
            // width={"auto"}
            objectFit={"cover"}
            src={props.item.image_link}
          />
        </Box>

        <Stack mt={6} align={"center"}  w="110px" h="auto" textAlign="center">
          <Heading fontSize={"16"} w="full" h="35px"  fontFamily={"body"} fontWeight={500}>
            {props.item.name}
          </Heading>
          <Text as="span" color="gray.300" fontSize="10"> {props.item.note}</Text>
          <Text fontWeight={800} fontSize={"20"} color="green.400">
            {formatter.format(props.item.price).slice(0, -3)}
          </Text>
          <Button
            mb={6}
            colorScheme="blue"
            onClick={function () {
              addItem(props.item);
            }}
            position="absolute"
            bottom="15px"
          >
            {" "}
            Add to cart{" "}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
