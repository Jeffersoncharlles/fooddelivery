import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICategories, IStoreChildren, IStoreContext } from "./types";



const StoreContext = createContext<IStoreContext>({} as IStoreContext)



export const StoreProvider = ({ children }: IStoreChildren) => {
    const [product, setProduct] = useState()
    const [categories, setCategories] = useState<ICategories>()
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     CategoriesAll()
    // }, [])

    const CategoriesAll = async () => {
        try {
            // const { data } = await api.get('/categories')
            // if (data) {
            //     setCategories(data)
            //     console.log(categories)
            // }
        } catch (error) {

        }
    }

    const Session = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StoreContext.Provider
            value={{
                categories, CategoriesAll

            }}>
            {children}
        </StoreContext.Provider>
    )
}


export const useStore = () => {
    const context = useContext(StoreContext)
    return context
}