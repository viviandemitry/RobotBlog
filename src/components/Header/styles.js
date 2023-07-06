import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: #000D3F;
 
`;

export const ContainerLogo = styled.div`
    display: flex;
    position: absolute;
    padding-top: 3.06rem;
    padding-left: 5.69rem;

    img{
        width: 4.62rem;
        height: 5.25rem; 
    }
`;

export const ConfigEmailButton = styled.div`
    position: absolute;
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
    position: relative;
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
    position: relative;
    background: rgba(17, 45, 188, 1), rgba(34, 56, 164, 1);
    align-items: center;
    width: 4.625rem;
    height: 1.57rem;
    border-radius: 2.69rem;

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