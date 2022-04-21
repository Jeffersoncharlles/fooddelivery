import { GiNotebook, GiCakeSlice, GiDonut } from 'react-icons/gi'
import { FaCookieBite } from 'react-icons/fa'
import {
    Container,
} from './styles';

interface ICategory {
    data: {
        id: number;
        name: string;
        image: string;

    }
    active: number;
}

export const CategoryItem = ({ data, active }: ICategory) => {

    return (
        <Container active={active} ids={data.id}>
            {data.name === 'Todas Categories' && (
                <GiNotebook />
            )}
            {data.name === 'Tortas' && (
                <GiCakeSlice />
            )}
            {data.name === 'Donuts' && (
                <GiDonut />
            )}
            {data.name === 'Cookies' && (
                <FaCookieBite />
            )}
            {/* <p>{data.name}</p> */}
        </Container>
    );
}