import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.color.tertiary};
    color: ${({ theme }) => theme.color.secondary2};
    /* border-radius: 5px; */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 60px 60px 0 60px;
    padding: 30px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    cursor: pointer;
    transition: all ease-in .3s;

    &:hover{
        filter: brightness(0.9);
    }
`;

export const ProductImage = styled.div`
    width: 200px;
    img{
        width: 100%;
        border-radius: 20px 60px 0 20px;
    }

`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;

    strong{
        font-size: 1.5rem;
        font-weight: 600;
    }

    small{
        font-size: 1.3rem;
        font-weight: 500;
        opacity: 0.8;
    }

    p{
        font-size: 1.1rem;
        color: ${({ theme }) => theme.color.secondary2};
        opacity: 0.5;
    }

`;
export const ProductButton = styled.div`

    svg{
        font-size: 1.5rem;
    }

`;