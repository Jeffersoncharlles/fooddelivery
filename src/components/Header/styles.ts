import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    background: ${({ theme }) => theme.color.tertiary};
    height: 80px;
    width: 1170px;

    nav{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input{
            padding: 20px;
            font-size: 1.5rem;
            width: 35rem;
            height: 3.5rem;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
            border-radius: 60px;
            
        }

        div{
            display: flex;
            align-items: center;
            strong{
                font-size: 1.5rem;
                margin-left: 10px;
                color: ${({ theme }) => theme.color.primary2};
            }
        }

        ul{
            list-style: none;
            display: flex;
            align-items: center;
            
            
            li{
                display: flex;
                margin-right: 40px;
                transition:  ease-in filter .3s;

                svg{
                    font-size: 2.5rem;
                    color: ${({ theme }) => theme.color.gray};
                }

                &:hover{
                    filter: brightness(0.8);
                }
            }
            
        }
    }
`;