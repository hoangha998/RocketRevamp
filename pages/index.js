import {
  Flex,
  Heading,
  Input,
  Button,
  Grid,
  GridItem,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
  Box,
  Progress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import Adhesive from "./components/Adhesive";
import Paper from "./components/Paper";
import {useState} from "react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [cartTotal, setCartTotal] = useState(0);

  const addTotal = (newItemTotal) =>{
    setCartTotal(cartTotal + newItemTotal);
  }

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  }

 console.log("CartTotal:", cartTotal)

  return (
    <Flex>
      <Box width="100%">
        <Navbar />
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Box width="100%" margin="10">
              <Adhesive />
              <Paper />
            </Box>
          </GridItem>
          <GridItem colStart={4} colEnd={6} float="right">
            <Box
              width="30%"
              padding="5"
              float="right"
              position="fixed"
              top="20"
              right="50"
            >
              <Box width="80%" margin="auto" pb="20px">
                <Heading
                  as="h2"
                  fontSize="32px"
                  fontWeight="1"
                  padding="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  {" "}
                  Budget Bar{" "}
                </Heading>
                <Progress
                  colorScheme="green"
                  height="30px"
                  value={50}
                  rounded="full"
                />
              </Box>
              <Box
                width="50%"
                display="flex"
                margin="auto"
                justifyContent="center"
                alignItems="center"
                pb="15px"
              >
                <Box
                  width="160px"
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
                  <Text fontSize="md" as="span">
                    Total:
                  </Text>
                  {/* <Text>$350,000</Text> */}
                  <Text>{cartTotal}</Text>
                </Box>
              </Box>
              <Tabs variant="enclosed" fontWeight="bold">
                <TabList>
                  <Tab>Cart</Tab>
                  <Tab>Approved</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box
                      width="400px"
                      height="auto"
                      margin="auto"
                      overflowY="scroll"
                      scrollbar="none"
                      maxHeight="60vh"
                      sx={{
                        "&::-webkit-scrollbar": {
                          display: "visible",
                          width: "8px",
                          borderRadius: "2px",
                          backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                      }}
                    >
                      <CartItem name="Test" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                      <CartItem name = "Penis Tape" price={93715} addTotal={addTotal} subTotal={subTotal}/>
                      <CartItem name = "Cardboard" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                
                    </Box>
                  </TabPanel>
                  <TabPanel></TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
