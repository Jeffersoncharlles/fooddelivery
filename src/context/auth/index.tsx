import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAuthProviderProps, User, IAuthContext } from "./types";


const AuthContext: React.Context<IAuthContext> = createContext({} as IAuthContext)



export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

    }, [])

    const VerifyToken = async () => {

    }

    const Session = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/api/login', { email, password })
            if (data) {
                setUser(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const SignUp = async (email: string, password: string, name: string) => {
        try {
            const { data } = await api.post('/api/login', { name, email, password })
            console.log(data)
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