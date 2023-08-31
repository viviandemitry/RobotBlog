import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    min-height: 100vh;
    ` 

export const ContentMain = styled.div`
    display: flex;
    width: 100%;
    /* min-height: 100vh; */
    background: #000D3F;
    /* border: solid green; */
    `

export const ContainerTexts = styled.div`
    display:table-row;
`;

export const Text = styled.h3`
    margin-top: 26.5rem;
    margin-left: 5.62rem;

    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size:  1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;
`;

export const TextTitle = styled.h1`
    margin-top: 1.12rem;
    margin-left: 5.56rem;

    color: #FFF;
    font-family: Jost;
    font-size: 5.02375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.22606rem;
    text-transform: uppercase;
    `

export const TextP = styled.p`
    margin-top: 0;
    margin-left: 5.56rem;
    width: 30rem;
    flex-direction: column;

    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;
`

export const ButtonInitial = styled.button`
    display: flex;
    margin-top: 5.88rem;
    margin-left: 5.56rem;
    width: 17.625rem;
    height: 3.625rem;
    padding: 0.9375rem 3.375rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;

    border-radius: 0.5625rem;
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;
    color: #FFF;
    font-family: Jost;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0225rem;

`

export const ContainerImg = styled.div`
        /* display: flex; */
        /* align-items:bottom; */
        /* margin-top: 14.44rem; */
        margin-top: 17.6rem;
        margin-left: 34.62rem;
        /* border: solid red; */
     
     img{
        width: 51.45rem;
        height: 56rem;
        /* flex-shrink: 0;  */
    }

`
export const TextRight = styled.div`
     display:table-row;
`
export const TextTitleRight = styled.h2`
    margin-top: 42.41rem;
    margin-right: 4.12rem;    

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 2.83094rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.12738rem;
    text-transform: uppercase;
`

export const TextPRight = styled.p`
    display: flex;
    margin-top: 0.9rem;
    margin-right: 4.12rem; 
    width: 27rem;
    flex-direction: column;
    flex-shrink: 0;
    
    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;
`