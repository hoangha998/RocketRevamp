import {Flex, Heading, Input,
   Button, Grid, GridItem,
   useColorMode, useColorModeValue,
   Wrap, WrapItem, Box, Progress
 }
from '@chakra-ui/react'
import ItemCard from './components/ItemCard'
export default function Home() {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex>
      <Box width="70%">
        <Heading as="h2" noOfLines={1}> Adhesive </Heading>
        <Wrap>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
          <WrapItem>
            <ItemCard> </ItemCard>
          </WrapItem>
        </Wrap>
      </Box>

      <Box width="30%">
        <Heading as="h2" fontSize="20px" fontWeight="1"> Your budget </Heading>
        <Progress colorScheme='green' height="30px" value={80}  rounded="full"/>
      </Box>
    </Flex>
  )
}
