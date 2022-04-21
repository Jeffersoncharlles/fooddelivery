import { BiCart } from 'react-icons/bi'

import {
    Container,
    CartHeader,
    CartBody,
} from './styles';

export const Cart = () => {

    return (
        <Container>
            <CartHeader>
                <BiCart size={24} />
                <strong>Meu Carrinho (x)</strong>
            </CartHeader>
            <CartBody>

            </CartBody>
        </Container>
    );
}