import { ReactNode } from "react";

export interface ICardChildren {
    children: ReactNode
}

export interface ICardContext {
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    quantity: number;
    isLoading: boolean
    CreateCart: ({ product }: ICreateCard) => void
    products: IProducts[]
    ChangeProduct: ({ id, action }: IChangeProduct) => void
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
    quantity: number;
}

export interface ICreateCard {
    product: IProducts
}

export interface IChangeProduct {
    id: number;
    action: string;
}