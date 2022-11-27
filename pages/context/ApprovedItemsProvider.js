import { createContext, useState } from 'react';

const ApprovedItemsContext = createContext()

export const ApprovedItemsProvider = ({children}) => {
  const [approvedtItems, setApprovedItems] = useState({})

  return (
    <ApprovedItemsContext.Provider value={[approvedtItems, setApprovedItems]}>
      {children}
    </ApprovedItemsContext.Provider>
  )
}

export default ApprovedItemsContext
