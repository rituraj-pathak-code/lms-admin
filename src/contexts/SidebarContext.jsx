import { useState } from "react"
import { createContext, useContext } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
  const [isCollapsed,setIsCollapsed] = useState(false)

  return (
    <SidebarContext.Provider value = {{isCollapsed, setIsCollapsed}}>
        {children}
    </SidebarContext.Provider>
  )
}


const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    return context
}

export {SidebarProvider, useSidebarContext}