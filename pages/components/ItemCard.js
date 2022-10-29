import {
  Box,
  Center,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function ItemCard() {
  const IMAGE =
  'https://il.farnell.com/productimages/large/en_GB/1775788-40.jpg';
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'230px'}
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
            src={IMAGE}
          />
        </Box>

        <Stack pt={8} align={'center'}>
          <Heading fontSize={'20'} fontFamily={'body'} fontWeight={500}>
            Duct Tape
          </Heading>
          <Text fontWeight={800} fontSize={'20'}>
            $57
          </Text>
          <Button mb={6} colorScheme="blue"> Add to cart </Button>
        </Stack>

      </Box>
    </Center>
  );
}
