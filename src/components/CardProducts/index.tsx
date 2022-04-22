import {
    Container,
    ProductImage,
    ProductInfo,
    ProductButton,
} from './styles';

import { MdOutlineOpenInFull } from 'react-icons/md'
import { PriceFormatted } from '../../utils/formatted';

interface Product {
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    points: number;
}

interface Card {
    onClick: (data: Product) => void;
    data: Product
}

export const CardProducts = ({ data, onClick }: Card) => {


    const handleClick = () => {
        onClick(data)
    }

    return (
        <Container onClick={handleClick}>
            <ProductImage>
                <img src={data.image} alt={data.name} />
            </ProductImage>
            <ProductInfo>
                <strong>{data.name}</strong>
                <small>{PriceFormatted(data.price)}</small>
                <p>{data.ingredients}</p>
            </ProductInfo>
            <ProductButton>
                <MdOutlineOpenInFull />
            </ProductButton>
        </Container>
    );
}