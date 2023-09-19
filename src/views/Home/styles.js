import styled from "styled-components";

export const ContainerMain = styled.div`
    margin: 0;
    padding: 0;
    border: 0;

    width: 100%;
    height: 100vh;
`
// export const Video = styled.div`
//     video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     }
// `

export const Title = styled.h1`
    margin-top: 50px;
    margin-left: 92px;

    color: #FFF;
    font-family: Jost;
    font-size: 89.941px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.349px;
    text-transform: uppercase;
`
export const Text = styled.p`
    margin-top: -55px;
    margin-left: 92px;  

    color: #FFF;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 151.5%; /* 21.21px */
    text-transform: capitalize;
`

export const NewsContainer = styled.div`
    margin-left: 92px; 
    margin-top: 50px; 
    width: 1100px;
    height: 80%;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 40% 600px;
    grid-column-gap: 100px;
    grid-row-gap: 0;

    background: #D9D9D9;
`
export const NewsContent = styled.a`
    margin: 30px;
    background: none;
    text-decoration:none;
`
export const NewsImg = styled.img`
    width: 500px;
    height: 350px;
    background: none;
`
export const NewsTitle = styled.h2`
    width: 500px;
    color: #000D3F;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: capitalize;

    background: none;
`