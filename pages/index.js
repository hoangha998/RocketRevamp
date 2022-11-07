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
} from "@chakra-ui/react";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex>
      <Box width="100%">
        <Navbar />

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Box width="100%" margin="10">
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Adhesive</Tab>
                  <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box>
                      <Heading as="h2" noOfLines={1}>
                        {" "}
                        Adhesive{" "}
                      </Heading>
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
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <Box
              width="30%"
              padding="5"
              float="right"
              position="absolute"
              top="20"
              right="50"
            >
              <Box width="70%" margin="auto">
                <Heading as="h2" fontSize="20px" fontWeight="1" padding="5">
                  {" "}
                  Your budget{" "}
                </Heading>
                <Progress
                  colorScheme="green"
                  height="30px"
                  value={50}
                  rounded="full"
                />
              </Box>
              <Heading as="h2">Cart</Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
