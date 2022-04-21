import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ICardChildren } from "./types";



const CartContext = createContext({})



export const CartProvider = ({ children }: ICardChildren) => {
    const [cart, setCart] = useState()
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
        <CartContext.Provider
            value={{


            }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext)
    return context
}