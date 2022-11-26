import { createContext, useState } from 'react';

const CartTotalContext = createContext()

export const CartTotalProvider = ({children}) => {
  const [cartTotal, setCartTotal] = useState(0)

  return (
    <CartTotalContext.Provider value={[cartTotal, setCartTotal]}>
      {children}
    </CartTotalContext.Provider>
  )
}

export default CartTotalContext
