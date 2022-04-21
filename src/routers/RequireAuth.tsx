import { Navigate, } from "react-router-dom";
import { useAuth } from "../context/auth";

type Props = {
    children: JSX.Element
    private?: boolean
}

export const RequireAuth = ({ children, ...rest }: Props) => {
    const { signed, isLoading } = useAuth()
    const isAuthenticated = true

    //carregando
    if (isLoading) {
        return (
            <div></div>
        )
    }

    //nao ta logado e a rota e privada
    if (!signed && isAuthenticated) {
        return <Navigate to="/" />
    }

    //ta logado e a rota nao e privada
    if (signed && !isAuthenticated) {
        return <Navigate to="/" />
    }
    return children
}