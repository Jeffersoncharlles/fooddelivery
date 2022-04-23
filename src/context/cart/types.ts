import { ReactNode } from "react";

export interface ICardChildren {
    children: ReactNode
}

export interface ICardContext {
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    quantity: number;
    isLoading: boolean
    CreateCard: ({ product }: ICreateCard) => void
    products: IProducts[]
}

export interface ICard {
    product: IProducts[];
    address: [];
    discount: number;
    delivery: number;
}

export interface IProducts {
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    points: number;
    quantity?: number;
}

export interface ICreateCard {
    product: IProducts
}