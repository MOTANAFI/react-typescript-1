import { useState } from "react"
import { createContext } from "react"

export type AuthUser = {
    name: string
    email: string
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type  UsereContextProviderProps = {
    children: React.ReactNode 
}

export const UserContext = createContext<UserContextType | null>(null)
export function UserContextProvider({children}: UsereContextProviderProps) {
    const [user, setUser] = useState<AuthUser | null >(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}