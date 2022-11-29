import '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { CartTotalProvider } from './context/CartTotalProvider'
import { CartItemsProvider } from './context/CartItemsProvider'
import { ApprovedItemsProvider } from './context/ApprovedItemsProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <ColorModeScript initialColorMode='dark' />
      <ApprovedItemsProvider>
        <CartItemsProvider>
          <CartTotalProvider>
            <Head>
              <title>Rocket Revamp</title>
            </Head>
            <Component {...pageProps} />
          </CartTotalProvider>
        </CartItemsProvider>
      </ApprovedItemsProvider>
    </ChakraProvider>
  )
}

export default MyApp
