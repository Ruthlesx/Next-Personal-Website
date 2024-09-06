'use client'
import React, { createContext, useContext, useState} from 'react'

const PageContext = createContext()

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ pageId, children }) => {

  const [ currentPageId, setCurrentPageId ] = useState(pageId);

  return (
    <PageContext.Provider value={{ pageId: currentPageId, setPageId: setCurrentPageId }}>
      {children}
    </PageContext.Provider>
  )
}