import { useState } from 'react';
import { BiCart, BiChevronDown } from 'react-icons/bi'
import { MdOutlineAdd, MdRemove } from 'react-icons/md'
import { useCart } from '../../context/cart';
import { PriceFormatted } from '../../utils/formatted';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import {
    Container,
    CartHeader,
    CartBody,
    ProductsContainer,
    ProductItem,
    ProductInfoContainer,
    ProductQuantity,
} from './styles';

export const Cart = () => {
    const { products, ChangeProduct } = useCart();
    const [show, setShow] = useState(false)

    const handleProductChange = (id: number, action: string) => {
        ChangeProduct({ id, action })
    }

    return (
        <Container>
            <CartHeader onClick={() => setShow(!show)}>
                <BiCart size={24} />
                <strong>Meu Carrinho ({products.length})</strong>
                {show && (
                    <BiChevronDown size={32} />
                )}
            </CartHeader>
            <CartBody show={show}>
                <ProductsContainer>
                    {products.map((item) => (
                        <>
                            <ProductItem key={item.id}>
                                <img src={item.image} alt="" />
                                <ProductInfoContainer>
                                    <strong>{item.name}</strong>
                                    <p>{PriceFormatted(item.price)}</p>
                                </ProductInfoContainer>
                                <ProductQuantity>
                                    <MdRemove onClick={() => handleProductChange(item.id, '-')} />
                                    <small>{item.quantity}</small>
                                    <MdOutlineAdd onClick={() => handleProductChange(item.id, '+')} />
                                </ProductQuantity>
                            </ProductItem>

                        </>
                    ))}


                </ProductsContainer>
            </CartBody>
        </Container>
    );
}