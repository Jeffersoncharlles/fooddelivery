import styled from 'styled-components';

export const Container = styled.main`
    background: ${({ theme }) => theme.color.secondary2};
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    position: fixed; //posição fixa
    bottom: 0;//colado em baixo
    right:1.5rem;//vai ficar 20px na direita
    color: #F5f5f5;
`;

export const CartHeader = styled.header`
    width: 18rem;
    height: 3rem;
    display: flex;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
    transition: ease-in all .3s;

    svg{
        margin-left: 10px;
    }
    strong{
        font-size: 1.2rem;
        margin-left: 10px;
    }

    &:hover{
        filter: brightness(0.9);
        transform: scale(1.1);
    }

`;

interface ICardBody {
    show: boolean
}

export const CartBody = styled.section<ICardBody>`
    display: ${({ show }) => show ? 'block' : 'none'};

`;