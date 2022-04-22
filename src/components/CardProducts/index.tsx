import {
    Container,
} from './styles';

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

        </Container>
    );
}