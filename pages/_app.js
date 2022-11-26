import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { CartTotalProvider } from './context/CartTotalProvider'
import { CartItemsProvider } from './context/CartItemsProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <ColorModeScript initialColorMode='dark' />
      <CartItemsProvider>
        <CartTotalProvider>
          <Component {...pageProps} />
        </CartTotalProvider>
      </CartItemsProvider>
    </ChakraProvider>
  )
}

export default MyApp
