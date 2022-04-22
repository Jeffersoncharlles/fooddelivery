import {
    Container,
    Body,
    Header,
} from './styles';

interface IModal {
    children: any;
    active?: boolean;
    close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, close, active = false }: IModal) => {


    const handleModalClick = (e: any) => {
        e.target.classList.contains('bgModal') ? close(false) : ''
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