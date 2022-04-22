import styled from 'styled-components';

interface IButton {
    small?: boolean;
}

export const Container = styled.button<IButton>`
    border: 0;
    background: ${({ theme }) => theme.color.primary2};
    color: ${({ theme }) => theme.color.black};

    padding: ${({ small }) => small ? '10px 15px' : '15px 25px'};
    margin-left: 20px;

    font-size: ${({ small }) => small ? '.81rem' : '1.3rem'};
    font-weight: 600;

    border-radius: 4px;
    transition: all ease-in .3s;

    &:hover{
        filter: brightness(0.9);
        transform: scale(1.06);
    }
`;