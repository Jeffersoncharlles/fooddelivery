import styled from 'styled-components';

interface ContainerProps {
    active: number;
    ids: number;
}

export const Container = styled.div<ContainerProps>`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: ${({ theme, active, ids }) =>
        active === ids ? '#ffad8b' : theme.color.secondary2

    };
    margin-right: 10px;
    margin-top: 10px;
    transition: all ease-in .3s;
    cursor: pointer;
    p{

    }
    svg{
        font-size: 3.5rem;
        color: ${({ theme }) => theme.color.black};
    }

    &:hover{
        transform: scale(1.1);
    }
`;