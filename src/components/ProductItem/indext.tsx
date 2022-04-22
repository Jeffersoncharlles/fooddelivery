import { PriceFormatted } from '../../utils/formatted';
import { Button } from '../Button';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import {
    Container,
    ProductBody,
    ProductButtons,
    ProductInfo,
    Details,
    Quantity,
    ProductQuantity,
} from './styles';

interface Product {
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

export const ProductItem = ({ data }: Product) => {

    return (
        <Container>
            <ProductBody>
                <img src={data.image} alt={data.name} />
                <ProductInfo>
                    <Details>
                        <h1>{data.name}</h1>
                        <small>{data.ingredients}</small>
                    </Details>
                    <Quantity>
                        <ProductQuantity>
                            <MdRemoveCircleOutline />
                            <p>2</p>
                            <MdAddCircleOutline />
                        </ProductQuantity>
                        <strong>{PriceFormatted(data.price)}</strong>
                    </Quantity>
                </ProductInfo>
            </ProductBody>
            <ProductButtons>
                <Button title='Cancelar' small />
                <Button title='Adicionar ao Carrinho' />
            </ProductButtons>
        </Container>
    );
}