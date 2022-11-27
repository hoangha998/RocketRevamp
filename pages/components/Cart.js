import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box
} from "@chakra-ui/react";

import CartTotalContext from '../context/CartTotalProvider'
import CartItemsContext from '../context/CartItemsProvider'
import {useContext, useState} from "react";
import CartItem from "./CartItem";

export default function Cart(props) {

  const [cartTotal, setCartTotal] = useContext(CartTotalContext)
  const [cartItems, setCartItems] = useContext(CartItemsContext)
  let cartItemsIds = Object.keys(cartItems);

  const addTotal = (newItemTotal) =>{
    setCartTotal(cartTotal + newItemTotal);
  }

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  }

  return (
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

          {cartItemsIds.map((item_id) => (
            <CartItem item={cartItems[item_id].item} />
          ))}
            // TODO: add "Get Approval" button
          </Box>
        </TabPanel>
        <TabPanel>
          <h1> Moyesh is gay </h1>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
