import { ReactNode } from "react";


export interface IAuthProviderProps {
    children: ReactNode;
}

export interface User {
    email: string;
    token: string;
}

export interface IAuthContext {
    signed: boolean;
    isLoading: boolean;
    user: User
}