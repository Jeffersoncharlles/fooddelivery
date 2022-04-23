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
import { useEffect, useState } from 'react';
import { useCart } from '../../context/cart';

interface Product {
    close: React.Dispatch<React.SetStateAction<boolean>>;
    data: {
        id: number;
        id_cat: number;
        name: string;
        image: string;
        price: number;
        ingredients: string;
        points: number;
        quantity: number;
    }
}



export const ProductItem = ({ data, close }: Product) => {
    const { CreateCart, quantity, setQuantity } = useCart()



    const handleRemoveQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = async () => {
        //step one get info
        CreateCart({ product: data })
        //closeModal
        close(false)
    }

    useEffect(() => {
        setQuantity(1)
    }, [data])

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
                            <MdRemoveCircleOutline onClick={handleRemoveQuantity} />
                            <small>{quantity}</small>
                            <MdAddCircleOutline onClick={() => setQuantity(quantity + 1)} />
                        </ProductQuantity>
                        <strong>{PriceFormatted(data.price * quantity)}</strong>
                    </Quantity>
                </ProductInfo>
            </ProductBody>
            <ProductButtons>
                <Button title='Cancelar' small onClick={() => close(false)} />
                <Button title='Adicionar ao Carrinho' onClick={handleAddToCart} />
            </ProductButtons>
        </Container>
    );
}