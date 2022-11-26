import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { CartTotalProvider } from './context/CartTotalProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <ColorModeScript initialColorMode='dark' />
      <CartTotalProvider>
        <Component {...pageProps} />
      </CartTotalProvider>
    </ChakraProvider>
  )
}

export default MyApp
