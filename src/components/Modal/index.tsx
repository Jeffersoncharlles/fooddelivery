import {
    Container,
    Body,
    Header,
} from './styles';

interface IModal {
    children: any;
    active?: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, setActive, active = false }: IModal) => {


    const handleModalClick = (e: any) => {
        e.target.classList.contains('bgModal') ? setActive(false) : ''
    }

    return (
        <Container
            className='bgModal'
            active={active}
            onClick={handleModalClick}
        >
            <Body>
                {children}
            </Body>
        </Container>
    );
}