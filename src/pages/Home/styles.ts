import styled from 'styled-components';

export const Container = styled.div`
    
    color: ${({ theme }) => theme.color.black};
    margin-top: 20px;

`;

export const Category = styled.div`
    font-size: 2rem;
    
`;
export const CategoryList = styled.div`
    display:flex;
    margin-top: 10px;

`;

export const Product = styled.div`
    margin: 30px 0;

`;
export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;

`;