import { ReactNode } from "react";

export interface IStoreContext {
    categories: ICategories | undefined
    CategoriesAll: () => Promise<void>
}

export interface IStoreChildren {
    children: ReactNode
}

export interface ICategories {
    error: string;
    result: {
        id: number;
        name: string;
        image: string;
    }[]
}