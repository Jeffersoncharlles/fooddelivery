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

export const ProductPagination = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

interface IPageProps {
    active: number;
    current?: number;
}

export const ProductPageItem = styled.div<IPageProps>`
        cursor: pointer;
        background: ${({ theme, active, current }) =>
        active === current ? '#ffad8b' : theme.color.secondary2
    };
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 5px;
` 