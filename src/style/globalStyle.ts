import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body,#root{
        height: 100%;
    }

    body{
        width: 100%;
        font: 400 1rem 'Inter', Arial, Helvetica, sans-serif;
        background: ${({ theme }) => theme.color.primary2};
        color: ${({ theme }) => theme.color.white};
        -webkit-font-smoothing: antialiased; //detalhes de font webkit
        -moz-osx-font-smoothing: grayscale !important;
        text-rendering: optimizeLegibility !important;
        overflow-y: hidden;//nao tem rolagem vertical
        
    }

    *,button,input{
        border: 0;
        outline: 0;
        font: 400 'Roboto', Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }

    @media (max-width:1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width:720px) {
        html {
            font-size: 87.5%;
        }
    }

`;