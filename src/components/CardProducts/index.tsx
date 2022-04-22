import {
    Container,
    ProductImage,
    ProductInfo,
    ProductButton,
} from './styles';

import { MdOutlineOpenInFull } from 'react-icons/md'
import { PriceFormatted } from '../../utils/formatted';

interface Card {
    data: {
        id: number;
        id_cat: number;
        name: string;
        image: string;
        price: number;
        ingredients: string;
        points: number;
    }
}

export const CardProducts = ({ data }: Card) => {



    return (
        <Container>
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