import styled from 'styled-components'

export const Aside = styled.aside`
    background-color: #20325c;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 45px;
    min-height: 100%;
    width: 260px;
    z-index: 810;
    -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    top:50px;
`
export const List = styled.ul`
    list-style:none;
    li{
        margin-bottom: 1rem;
        a{
            color:#eae9e9;
            text-decoration:none;
            font-seize: 15px;
            display:inline-block;
            text-transform:capitalize;
            svg{
                margin-right:.5rem;
                vertical-align: middle;
            }
            &:hover{
                color:#b9e258
            }
        };
    }
`;