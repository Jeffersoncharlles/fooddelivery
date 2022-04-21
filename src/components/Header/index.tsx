import { BiStore } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom'
import Logo from '../../assets/Icon.svg'
import {
    Container,
} from './styles';


export const Header = () => {

    return (
        <Container>
            <nav>
                <div><img src={Logo} alt="Burger" /><strong>FoodDelivery</strong></div>
                <input
                    type="text"
                    placeholder='Search'

                />
                <ul>
                    <li>
                        <Link to="/"><BiStore /></Link>
                    </li>
                    <li>
                        <Link to="/orders"><MdOutlineDeliveryDining /></Link>
                    </li>
                    <li>
                        <Link to="/profile"><BiUser /></Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}