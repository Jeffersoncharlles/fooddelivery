import { ReactNode } from "react";

export interface IStoreContext {
    categories: ICategories[];
    products: IProducts[];
    ListProducts: () => Promise<void>;
    isLoading: boolean;
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string;
    activeSearch: string;
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