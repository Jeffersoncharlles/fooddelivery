import styled from 'styled-components';

export const Container = styled.div`
    width: 47rem;//752px
    color:${({ theme }) => theme.color.white};
`;

export const ProductBody = styled.div`
    height: 200px;
    display: flex;

    img{
        width: 300px;
        border-radius: 20px 60px 0 20px;
    }
`;
export const ProductButtons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
`;

export const Details = styled.div`
    h1{
        font-size: 2rem;
        font-weight: 600;
        
    }
    small{
        display: inline-block;
        margin-top: 10px;
        font-size: 1.2rem;
    }

`;
export const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    
    strong{
        font-size: 2rem;
        
    }
`;

interface IPQuantity {
    disable?: boolean
}

export const ProductQuantity = styled.div<IPQuantity>`
    font-size: 2rem;
    display: flex;
    align-items: center;
    

    small{
        color: ${({ theme }) => theme.color.white};
        margin: 0 15px;
        cursor: not-allowed;
    }
    svg{
        color: ${({ theme }) => theme.color.white};
        font-size: 2.5rem;
        /* padding: 10px 20px; */
        cursor: pointer;
    }
`;