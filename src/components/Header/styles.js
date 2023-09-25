import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    background: #000D3F;
 
`;

export const ContainerLogo = styled.div`
    display: flex;
    padding-top: ${px2vw(10)};
    padding-bottom: ${px2vw(10)};
    padding-left: ${px2vw(91)};

    img{
        width: ${px2vw(60)};
        height: ${px2vw(70)}; 
    }
`;

export const ConfigEmailButton = styled.div`
    float: right;
    display: flex;
    flex-direction: row;
    column-gap: ${px2vw(72)};
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(900)};
    justify-content: center;
    align-items: center;

    img{
        width: ${px2vw(22)};
        height: ${px2vw(22)}; 
    }
`;


export const Email = styled.p`
    color: white;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    text-transform: uppercase;
`;

export const ButtonLogout = styled.button`
    width: ${px2vw(90)};
    height: ${px2vw(30)};
    border-radius: ${px2vw(9)};
    border-radius: ${px2vw(9)};
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`;