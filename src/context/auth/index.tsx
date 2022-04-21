import { createContext, useContext } from "react";
import { IAuthProviderProps } from "./types";


const AuthContext = createContext({})



export const AuthProvider = ({ children }: IAuthProviderProps) => {


    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}