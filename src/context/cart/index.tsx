import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ICard, ICardChildren, ICardContext, IChangeProduct, ICreateCard, IProducts } from "./types";



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
        // get localStore
        VerifyCart()
    }, [])

    useEffect(() => {
        //verificar se e maior que 0
        if (products.length > 0) {
            storageSave()
        }
    }, [products])

    const VerifyCart = async () => {
        const storageCard = localStorage.getItem('@cartFoodDelivery');
        if (storageCard) {
            const Carts = JSON.parse(storageCard)
            setCart(Carts);// salvar card
            setProducts(Carts.products) //salvar novo estado com os dados que ta salvo 
            setIsLoading(false)

        }
        setIsLoading(false)
    }

    const CreateCart = async ({ product }: ICreateCard) => {
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

    const ChangeProduct = ({ id, action }: IChangeProduct) => {
        let newProduct = [...products]

        if (newProduct[id]) {
            if (action === '-') {
                newProduct[id].quantity--;
                if (newProduct[id].quantity <= 0) {
                    newProduct = newProduct.filter((item, index) => item.id !== id)
                }
            } else {
                newProduct[id].quantity++
            }
        }
        setProducts(newProduct)
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
                CreateCart, setQuantity, ChangeProduct
            }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext)
    return context
}