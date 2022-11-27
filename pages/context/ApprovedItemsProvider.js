import { createContext, useState } from 'react';

const ApprovedItemsContext = createContext()

export const ApprovedItemsProvider = ({children}) => {
  const [approvedItems, setApprovedItems] = useState({})

  return (
    <ApprovedItemsContext.Provider value={[approvedItems, setApprovedItems]}>
      {children}
    </ApprovedItemsContext.Provider>
  )
}

export default ApprovedItemsContext
