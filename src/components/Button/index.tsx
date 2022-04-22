import {
    Container,
} from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    showIcon?: boolean;
    small?: true;
}
export const Button = ({ title, small, ...rest }: IButton) => {

    return (
        <Container {...rest} small={small} >
            {title}
        </Container >
    );
}