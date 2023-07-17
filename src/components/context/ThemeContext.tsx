

import { createContext, useState } from "react"
import {theme} from "./theme"

export type AuthUser = {
    name: string
    email: string
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}



type ThemeContextProviderProps = {
    children: React.ReactNode
}
export const ThemeContext = createContext(theme)
export const UserContext = createContext({} as UserContextType)

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null >(null)
    return(
         <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={{user, setUser}}>

        {children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}
