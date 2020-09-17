import styled from "styled-components"

export const Wrapper = styled.div`
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 260px;
    z-index: 820;
    padding: 24px;
    min-height: calc(100% - 72px);
    padding-top: 6rem;
`;
export const ContentInner = styled.div`
    background: #fff;
    padding: 24px;
    box-shadow: 4px 4px 20px 0 rgba(0,0,0,.01);
    min-height: calc(100vh - 165px);
    position: relative;
    h6{
        color:#20325c
    }
    .MuiIconButton-root:hover{
        background-color: transparent;
        color: #466fa5;
    }
    .Mui-disabled.Mui-disabled{
        display:none;
    }
    table{
        font-size: 14px;
        thead{
            tr{
                th{
                    background-color:#dbdee273
                }
            }
        }
        tbody{
            tr{
                td{
                    .material-icons{
                        font-size: 16px;
                    }
                    #date-picker-dialog{
                        font-size:15px
                    }
                    svg{
                        font-size:15px
                    }
                }
            }
        }
    }
`
/* ._bg-dasboard{
    background: #e3e8ee;
    .content-wrapper{
        .contentInner{
            background: #e3e8ee;
            .table-tbody{
                background: #ffffff;
            }
            .box{
                .box-root{
                    .cards-box{
                        border-radius: 4px;
                        box-shadow: 0 7px 14px 0 rgba(60,66,87, 0.12), 0 3px 6px 0 rgba(0,0,0, 0.12);
                        box-sizing: border-box;
                        background-color: #fff;
                    }
                }
            }
        }
    }
} */