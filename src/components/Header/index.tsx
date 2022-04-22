import { BiStore } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/Icon.svg'
import {
    Container,
} from './styles';

interface IHeader {
    search: string;
    onSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ search, onSearch }: IHeader) => {
    const { pathname } = useLocation()

    return (
        <Container>
            <nav>
                <Link to='/'>
                    <div><img src={Logo} alt="Burger" /><strong>FoodDelivery</strong></div>
                </Link>
                <input
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={e => onSearch(e.target.value)}
                />
                <ul>
                    <li>
                        <Link to="/" aria-label='home' data-tip="Home" data-for="tip-button"><BiStore /></Link>
                    </li>
                    <li>
                        <Link to="/orders" aria-label='orders' data-tip="Orders" data-for="tip-button" ><MdOutlineDeliveryDining /></Link>
                    </li>
                    <li>
                        <Link to="/profile" aria-label='profile' data-tip="Profile" data-for="tip-button"><BiUser /></Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}