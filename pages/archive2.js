import {Flex, Heading, Input, Button, useColorMode, useColorModeValue} from '@chakra-ui/react'

export default function Home() {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex height="100vh" alginItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <a href="/archive"> Testing </a>
        <Heading mb={6}> Log in </Heading>
        <Input placeholder="Enter email" variant="filled" mb={3} type="email" />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal"> Log In </Button>
        <Button onClick={toggleColorMode}> Toggle Color Mode </Button>
      </Flex>
    </Flex>
  )
}
