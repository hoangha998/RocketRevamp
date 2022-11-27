import { createContext, useState } from 'react';

const CartItemsContext = createContext()

export const CartItemsProvider = ({children}) => {
  const [cartItems, setCartItems] = useState({})

  return (
    <CartItemsContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartItemsContext.Provider>
  )
}

export default CartItemsContext
