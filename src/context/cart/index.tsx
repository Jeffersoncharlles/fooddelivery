import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ICard, ICardChildren, ICardContext, ICreateCard, IProducts } from "./types";



const CartContext = createContext<ICardContext>({} as ICardContext)



export const CartProvider = ({ children }: ICardChildren) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState<IProducts[]>([])
    const [quantity, setQuantity] = useState(1)
    const [address, setAddress] = useState([])
    const [discount, setDiscount] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        VerifyCart()
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            storageSave()
        }
    }, [products])

    const VerifyCart = async () => {
        const storageCard = localStorage.getItem('@cartFoodDelivery');
        if (storageCard) {
            const Carts = JSON.parse(storageCard)
            setCart(Carts);
            setProducts(Carts.products)
            setIsLoading(false)

        }
        setIsLoading(false)
    }
    const CreateBuy = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    const CreateCard = async ({ product }: ICreateCard) => {
        const newProduct = [...products]
        const ExistsProducts = newProduct.findIndex(p => p.id === product.id)//procurar pelo mesmo produto   
        if (ExistsProducts > -1) {
            const qt = products[ExistsProducts].quantity += quantity as any
            setProducts(newProduct)
            setQuantity(qt)

        } else {
            newProduct.push({
                ...product,
                quantity
            })
            setProducts(newProduct)

        }


    }

    const RemoveCard = async ({ productItem }: any) => {

    }

    const storageSave = () => {
        const schema = {
            products: products

        }

        localStorage.setItem('@cartFoodDelivery', JSON.stringify(schema))
    }

    return (
        <CartContext.Provider
            value={{
                isLoading, products, quantity,
                CreateCard, setQuantity
            }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext)
    return context
}