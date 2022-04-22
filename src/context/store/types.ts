import { ReactNode } from "react";

export interface IStoreContext {
    categories: ICategories[]
    products: IProducts[]
    ListProducts: () => Promise<void>
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