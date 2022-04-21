import { createContext, useContext, useEffect, useState } from "react";
import { IAuthProviderProps, User, IAuthContext } from "./types";


const AuthContext: React.Context<IAuthContext> = createContext({} as IAuthContext)



export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

    }, [])

    const VerifyToken = async () => {

    }

    const Session = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user.token, isLoading, user

            }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}