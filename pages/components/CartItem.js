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

const IMAGE = "https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg";
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
        <Box width="120px" display="flex" alignItems="center" float="left" >
          <Image
            rounded={"lg"}
            height={"125px"}
            width={"auto"}
            src={IMAGE}
          />
        </Box>
        <Box
          width="150px"
          direction="column"
          textAlign="center"
          float="left"
        >
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
            <Text fontWeight="Bold" color="green.400">$247/<Text as="span" fontWeight="100" color="gray.500"> item</Text></Text>
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
            <NumberInput width="100px" margin="auto">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Box>

        <Box width="30%"  height="auto">
          <CloseButton position="relative"  left="90px" bottom="0" />
          <Box position="relative" left="0" top="8" border="1px solid #784203" background="#A0FFF0" rounded="lg" p="px" textAlign="center" mr="10px">
            <Text fontWeight="500" color="black">Total: $150,000</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
