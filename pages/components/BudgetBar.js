import {
  Heading,
  Box,
  Progress,
  Text,
} from "@chakra-ui/react";
import CartTotalContext from '../context/CartTotalProvider'
import {useContext, useState} from "react";

export default function BudgetBar() {

  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  let color = "green"
  if(cartTotal > 500000 && cartTotal < 750000){
    color = "orange";
  }else if(cartTotal > 750000 && cartTotal < 1000000){
    color = "red";
  }

  return (
    <Box>
      <Box width="90%" margin="auto" pb="20px" mt="-10">
        <Heading
          as="h2"
          fontSize="32px"
          fontWeight="1"
          padding="5"
          textAlign="center"
          fontWeight="bold"
        >
          Budget Bar
        </Heading>
        <Progress
          colorScheme={color}
          height="30px"
          hasStripe
          value={cartTotal}
          rounded="full"
          max={1000000}
        />
      </Box>
      <Box
        width="60%"
        display="flex"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        pb="15px"
      >
        <Box
          width="180px"
          bg="blue.900"
          p="4"
          color="white"
          rounded="md"
          fontWeight="medium"
          display="flex"
          float="right"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="lg" as="span">
            Total:
          </Text>
          <Text fontSize="xl">{formatter.format(cartTotal).slice(0,-3)}</Text>
        </Box>
      </Box>
    </Box>
    )
}
