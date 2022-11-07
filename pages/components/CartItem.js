import React from "react";
import { Box, Flex, HStack, chakra,  NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function CartItem(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "gray.700" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="md"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Duct Tape
          </chakra.h1>

          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
            Lorem ipsum doslor sit amet consectetur adipisicing elit In odit
          </chakra.p>
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              $57
            </chakra.h1>

            
            <NumberInput
                    defaultValue={1}
                    max={10}
                    keepWithinRange={false}
                    clampValueOnBlur={false}
                    size='sm'
                    >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                    </NumberInput>
        </Box>
        <Flex mt={3} alignItems="center" justifyContent="space-between">
           
            
            
          </Flex>
          <chakra.button
              px={2}
              py={1}
              bg="red.900"
              fontSize="xs"
              color="gray.100"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "gray.300",
              }}
            >
              Delete
            </chakra.button>
      </Flex>
      
    </Flex>
  );
};

