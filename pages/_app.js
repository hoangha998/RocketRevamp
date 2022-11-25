import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <ColorModeScript initialColorMode='dark' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
