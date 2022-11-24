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

function increment() {
  quantity += 1;
  console.log(quantity);
  return quantity;
}

function decrement() {
  if (quantity > 0) {
    quantity -= 1;
    console.log(quantity);
  }
}

const IMAGE = "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
let quantity = 2;
export default function CartItem() {
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
          <Image rounded={"lg"} height={"125px"} width={"auto"} src={IMAGE} />
        </Box>
        <Box width="150px" direction="column" textAlign="center" float="left">
          <Box>
            <Heading fontSize="24px" fontWeight="400" pt="5px" height="50%">
              Duct Tape
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
              $247/
              <Text as="span" fontWeight="100" color="gray.500">
                {" "}
                item
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
            {/* <NumberInput width="100px" margin="auto">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> */}
            <Flex width="100px" margin="auto" align="center">
              <Text p="2" onClick={() => decrement()} cursor="pointer">
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
              <Text p="2" cursor="pointer" onClick={() => quantity = increment()}>
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
              $150,000
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
