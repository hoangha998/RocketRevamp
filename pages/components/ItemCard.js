import {
  Box,
  Center,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useToast
} from '@chakra-ui/react';
import CartItemsContext from '../context/CartItemsProvider'
import CartTotalContext from '../context/CartTotalProvider'
import {useContext, useState} from "react";

export default function ItemCard(props) {


  const [cartTotal, setCartTotal] = useContext(CartTotalContext)
  const [cartItems, setCartItems] = useContext(CartItemsContext)
  const toast = useToast();

  const addItem = (item) =>{
    let alreadyAdded = false;
    for(let i=0; i < cartItems.length; i++) {
      if (item._id == cartItems[i]._id) {
        alreadyAdded = true;
        toast({
          title: 'Cannot add item',
          description: 'Item "' + item.name + '" is already in your cart!',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
        break;
      }
    }
    if (!alreadyAdded) {
      setCartItems([...cartItems, item]);
      setCartTotal(cartTotal + item.price);
    }
  }

  const IMAGE =
  'https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg';
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'200px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        mr="5">

        <Box
          rounded={'lg'}
          mt={-10}
          pos={'relative'}
          height={'160px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(5px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(15px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={160}
            width={230}
            objectFit={'cover'}
            src={props.item.image_link}
          />
        </Box>

        <Stack pt={8} align={'center'}>
          <Heading fontSize={'20'} fontFamily={'body'} fontWeight={500}>
            {props.item.name}
          </Heading>
          <Text fontWeight={800} fontSize={'20'} color="green.400">
            ${props.item.price}
          </Text>
          <Button mb={6} colorScheme="blue" onClick={function() {addItem(props.item)}}> Add to cart </Button>
        </Stack>

      </Box>
    </Center>
  );
}
