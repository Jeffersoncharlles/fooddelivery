import styled from 'styled-components';

interface IModal {
    active: boolean
}

export const Container = styled.main<IModal>`
    position: fixed;
    left: 0;//pegar tudo da tela
    top: 0;//pegar tudo da tela
    right: 0;//pegar tudo da tela
    bottom: 0;//pegar tudo da tela
    z-index: 2;
    background: rgba( 13, 13, 13, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    /* border-radius: 10px; */
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: ${({ theme }) => theme.color.gray};

    display: ${({ active }) => active ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const Body = styled.section`
    /* width: 300px;
    height: 300px; */
    padding: 20px;
    background: ${({ theme }) => theme.color.black};
    border-radius: 20px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    max-height: 90vh;
    overflow: auto;//se o conteúdo passar colocar rolagem
    max-width: 100vw;
`;
export const Header = styled.header`


`;