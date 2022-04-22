import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICategories, IList, IProducts, IStoreChildren, IStoreContext } from "./types";
import ReactTooltip from "react-tooltip";



const StoreContext = createContext<IStoreContext>({} as IStoreContext)

let timeSearch = 0

export const StoreProvider = ({ children }: IStoreChildren) => {
    const [products, setProducts] = useState<IProducts[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState('')

    const [activeSearch, setActiveSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    // useEffect(() => {
    //     CategoriesAll()
    // }, [])

    useEffect(() => {

        clearTimeout(timeSearch)
        timeSearch = setTimeout(() => {
            setActiveSearch(search)
            //ele so vai setar quando digitar tudo
        }, 2000)
    }, [search])

    const CategoriesAll = async () => {
        try {
            // const { data } = await api.get('/categories')
            // if (data.error === '') {
            //     setCategories(data.result)
            //     ReactTooltip.rebuild()
            //     setIsLoading(false)
            //     console.log(categories)
            // }
        } catch (error) {

        }
    }

    const ListProducts = async ({ activeSearch, currentPage, activeCategory }: IList) => {
        try {
            const query = {
                params: {
                    search: activeSearch,
                    page: currentPage,
                    category: activeCategory
                }
            }

            const { data } = await api.get(`/products`, query)
            if (data.error === '') {
                setProducts(data.result.data)
                setTotalPages(data.result.total)
                setCurrentPage(data.result.page)
                setIsLoading(false)
            }

        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <StoreContext.Provider
            value={{
                isLoading, categories, products, currentPage, totalPages, search, activeSearch, activeCategory,
                setCurrentPage, setActiveCategory, setSearch, ListProducts
            }}>
            {children}
        </StoreContext.Provider>
    )
}


export const useStore = () => {
    const context = useContext(StoreContext)
    return context
}