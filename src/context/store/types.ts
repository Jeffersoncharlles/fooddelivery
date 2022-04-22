import { ReactNode } from "react";

export interface IStoreContext {
    categories: ICategories[];
    products: IProducts[];
    ListProducts: ({ activeSearch, currentPage }: IList) => Promise<void>;
    isLoading: boolean;
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string;
    activeSearch: string;
    activeCategory: number;
    setActiveCategory: React.Dispatch<React.SetStateAction<number>>
}

export interface IList {
    activeSearch?: string;
    currentPage?: number;
    activeCategory?: number;
}

export interface IStoreChildren {
    children: ReactNode
}

export interface ICategories {
    id: number;
    name: string;
    image: string;
}

export interface IProducts {
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    points: number;
}