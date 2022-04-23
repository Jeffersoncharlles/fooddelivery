import { useState } from 'react';
import { BiCart, BiChevronDown } from 'react-icons/bi'
import { useCart } from '../../context/cart';

import {
    Container,
    CartHeader,
    CartBody,
} from './styles';

export const Cart = () => {
    const { products } = useCart();
    const [show, setShow] = useState(false)

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

            </CartBody>
        </Container>
    );
}