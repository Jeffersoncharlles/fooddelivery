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

export const ProductsContainer = styled.div`

    
`;
export const ProductItem = styled.div`
    display: flex;
    margin: 15px;

    img{
        width: 64px;
        height: auto;
        border-radius: 7px;
    }

`;
export const ProductInfoContainer = styled.div`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;

    strong{
        font-size: 1.5rem;
        font-weight: 500;
    }

    p{
        font-size: 1.1rem;
    }

`;
export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    small{
        font-size: 1.3rem;
        font-weight: 500;
        margin: 0px 5px;
    }
    svg{
        font-size: 1.3rem;
        cursor: pointer;
    }
`;