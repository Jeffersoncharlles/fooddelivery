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
    setActive: React.Dispatch<React.SetStateAction<number>>;
}

export const CategoryItem = ({ data, active, setActive }: ICategory) => {

    const handleClick = () => {
        setActive(data.id)
    }

    return (
        <Container
            active={active}
            ids={data.id}
            onClick={handleClick}
            data-tip={data.name}
            data-for="tip-top"
        >
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