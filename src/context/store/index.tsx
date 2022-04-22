import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICategories, IProducts, IStoreChildren, IStoreContext } from "./types";
import ReactTooltip from "react-tooltip";



const StoreContext = createContext<IStoreContext>({} as IStoreContext)



export const StoreProvider = ({ children }: IStoreChildren) => {
    const [products, setProducts] = useState<IProducts[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     CategoriesAll()
    // }, [])

    const CategoriesAll = async () => {
        try {
            // const { data } = await api.get('/categories')
            // if (data.error === '') {
            //     setCategories(data.result)
            //     ReactTooltip.rebuild()
            //     console.log(categories)
            // }
        } catch (error) {

        }
    }

    const ListProducts = async () => {
        try {
            const { data } = await api.get('/products')
            // console.log(data.result.data)
            if (data.error === '') {
                setProducts(data.result.data)
            }

        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <StoreContext.Provider
            value={{
                categories, products,
                ListProducts
            }}>
            {children}
        </StoreContext.Provider>
    )
}


export const useStore = () => {
    const context = useContext(StoreContext)
    return context
}