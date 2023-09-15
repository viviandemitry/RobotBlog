import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    background: #000D3F;
 
`;

export const ContainerLogo = styled.div`
    display: flex;
    padding-top: 3.06rem;
    padding-left: 5.69rem;

    img{
        width: 4.62rem;
        height: 5.25rem; 
    }
`;

export const ConfigEmailButton = styled.div`
    float: right;
    display: flex;
    flex-direction: row;
    column-gap: 4.5rem;
    margin-top: 4.13rem;
    margin-left: 96.4rem;
    justify-content: center;
    align-items: center;

    img{
        width: 2rem;
        height: 2rem; 
    }
`;


export const Email = styled.p`
    color: white;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    text-transform: uppercase;
`;

export const ButtonLogout = styled.button`
    width: 4.625rem;
    height: 1.57rem;
    border-radius: 9px;
    border-radius: 0.5625rem;
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
    text-transform: uppercase;
`;