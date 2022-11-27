import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";

import CartTotalContext from "../context/CartTotalProvider";
import CartItemsContext from "../context/CartItemsProvider";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import ApprovedItem from "./ApprovedItems";
import ApprovedItemsContext from "../context/ApprovedItemsProvider";
export default function Cart(props) {
  const [cartTotal, setCartTotal] = useContext(CartTotalContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [approvedItems, setApprovedItems] = useContext(ApprovedItemsContext);

  let cartItemsIds = Object.keys(cartItems);
  let approvedItemsIds = Object.keys(approvedItems);

  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);

  const addTotal = (newItemTotal) => {
    setCartTotal(cartTotal + newItemTotal);
  };

  const subTotal = (newItemTotal) => {
    setCartTotal(cartTotal - newItemTotal);
  };

  let cartLen = cartItemsIds.length;

  let showCart = "none";
  let showApprove = "none";
  if (cartLen > 0) {
    showCart = "show";
  }

  if(approvedItemsIds.length > 0){
    showApprove = "show";
  }

  function checkPassword(tabPannel) {
    console.log(tabPannel);
    // console.log(passwo)
    if (tabPannel == "Approve") {
      if (password == "ROCKET") {
        let copyApprovedtItems = { ...cartItems };
        setApprovedItems(copyApprovedtItems);
        setCartItems({});
        console.log(approvedItems);
        console.log("Approved", password);
        setEditMode(false);
      } else {
        setApprovedItems({});
      }
    } else if (tabPannel == "Edit") {
      if (password == "MO") {
        setEditMode(true);
      }
    }
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
          </Box>
          <Flex gap="5" width="80%" m="auto" mt="5">
            <Input
              type="password"
              width="80%"
              pr="5"
              placeholder="Enter code"
              required
              display={showCart}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <Box display={showCart}>
              <Button
                size="md"
                colorScheme="red"
                onClick={function () {
                  checkPassword("Approve");
                }}
              >
                Approve
              </Button>
            </Box>
          </Flex>
        </TabPanel>
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
            {approvedItemsIds.map((item_id) => (
              <ApprovedItem
                item={approvedItems[item_id].item}
                editMode={editMode}
              />
            ))}
          </Box>
          <Flex gap="5" width="80%" m="auto" mt="5">
            <Input
              type="password"
              width="100%"
              pr="5"
              placeholder="Enter code"
              required
              display={showApprove}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />

            <Box display={showApprove}>
              <Button
                size="md"
                pr="8"
                pl="8"
                colorScheme="red"
                onClick={function () {
                  checkPassword("Edit");
                }}
              >
                Edit
              </Button>
            </Box>
            <Box display={showApprove}>
              <Button
                size="md"
                colorScheme="blue"
                onClick={function () {
                  setEditMode(false);
                }}
              >
                Save
              </Button>
            </Box>
     
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
