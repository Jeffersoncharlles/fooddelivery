import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: ${({ theme }) => theme.color.tertiary};
    
    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        
       
    }
`;

export const Body = styled.section`
    display: flex;
    background: ${({ theme }) => theme.color.primary2};
    flex: 1;
    padding: 15px;
    overflow-y: auto;//ativar o scroll so aqui
    

    > div{
        display: flex;
        width: 1440px;
        margin:  0 auto;
    }
`;