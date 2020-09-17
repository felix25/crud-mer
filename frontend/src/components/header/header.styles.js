import styled from 'styled-components';
export const Header = styled.div`
    max-height: 100px;
    z-index: 1030;
    position: fixed;
    width: 100%;
    .drowp-list-user{
        position: absolute;
        bottom: -50px;
        background: white;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 34px;
        right: 24px;
        display: none;
        span{
            cursor: pointer;
        }
    }
    .logo{
        background-color: #20325c;
        color: #fff;
        border-bottom: 0 solid transparent;
        webkit-transition: width 0.3s ease-in-out;
        -o-transition: width 0.3s ease-in-out;
        transition: width 0.3s ease-in-out;
        display: block;
        float: left;
        height: 72px;
        font-size: 20px;
        line-height: 72px;
        text-align: center;
        width: 230px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0 15px;
        font-weight: 300;
        overflow: hidden;
        text-decoration: none;
    }

    .navbar{
        background-color: #ffffff;
        box-shadow: 4px 4px 40px 0 rgba(0,0,0,.05);
        webkit-transition: margin-left 0.3s ease-in-out;
        -o-transition: margin-left 0.3s ease-in-out;
        transition: margin-left 0.3s ease-in-out;
        margin-bottom: 0;
        margin-left: 260px;
        border: none;
        min-height: 50px;
        border-radius: 0;
        height: 72px;

        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        line-height: 72px;
        .navbar-custom-menu{
            color:#666666;
            ul{
                margin: 0;
                width: auto;
                display: flex;
                padding: 0 15px;
                list-style: none;
                li{
                    .userAdmin{
                        &:hover{
                            .drowp-list-user{
                                display: block;
                            }
                        }
                        display: flex;
                        .name-user{
                            padding: 0 15px;
                            font-size: 13px;
                            color: #666;
                            transition: background .3s,width .2s;
                            zoom: 1;
                            span{
                                &:first-child{
                                    margin-right: 3px;
                                }
                            }
                        }
                        .image-user{
                            figure{
                                box-sizing: border-box;
                                margin: 0;
                                padding: 0;
                                color: #666;
                                font-size: 13px;
                                font-variant: tabular-nums;
                                line-height: 1.5;
                                list-style: none;
                                font-feature-settings: "tnum";
                                position: relative;
                                display: inline-block;
                                overflow: hidden;
                                color: #fff;
                                white-space: nowrap;
                                text-align: center;
                                vertical-align: middle;
                                background: #ccc;
                                width: 32px;
                                height: 32px;
                                line-height: 32px;
                                border-radius: 50%;
                                img{
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`