import CartItem from "./CartItem";
import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
  } from "@chakra-ui/react";
  import {useState} from "react";

export default function Cart() {
    const [cartTotal, setCartTotal] = useState(0);

  const addTotal = (newItemTotal) =>{
    setCartTotal(cartTotal + newItemTotal);
  }

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  }
    
    return(
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
                      maxHeight="55vh"
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
                      <CartItem name="Test" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                      <CartItem name="Test" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                      <CartItem name="Test" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                      <CartItem name="Test" price={150000} addTotal={addTotal} subTotal={subTotal}/>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <h1> Moyesh is gay </h1>
                  </TabPanel>
                </TabPanels>
              </Tabs>
        );
}