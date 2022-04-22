import {
    Container,
    ProductBody,
    ProductButtons,
    ProductInfo,
    Details,
    Quantity,
} from './styles';

interface Product {

}

export const ProductItem = ({ }: Product) => {

    return (
        <Container>
            <ProductBody>
                <img src="" alt="" />
                <ProductInfo>
                    <Details>

                    </Details>
                    <Quantity>

                    </Quantity>
                </ProductInfo>
            </ProductBody>
            <ProductButtons>


            </ProductButtons>
        </Container>
    );
}