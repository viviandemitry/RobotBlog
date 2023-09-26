import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const ContainerMain = styled.div`
    margin: 0;
    padding: 0;
    border: solid yellow;

    width: 100%;
    height: 100vh;

    video {
    border: solid red;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    }

    /* @media ${device.mobileM} {
        width: 100vw;
        height: 100vh; 
    } */
`
// export const Video = styled.div`
//     video {
//     border: solid red;
//     width: 100vw;
//     height: 100vh;
//     object-fit: cover;
//     position: fixed;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     z-index: -1;


//     /* position: absolute;
//     top: 0;
//     left: 0;
//     z-index: -1; 
//     width: 100vw;
//     height: 100vh;
//     overflow: hidden; */
//     }
// `

export const Title = styled.h1`
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(89)};
    z-index: 1;

    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(50)};
    font-style: normal;
    font-weight: ${px2vw(700)};
    line-height: normal;
    letter-spacing: ${px2vw(1.349)};
    text-transform: uppercase;
`
export const Text = styled.p`
    margin-top: ${px2vw(-30)};
    margin-left: ${px2vw(92)};  

    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: ${px2vw(500)};
    line-height: 151.5%; /* 21.21px */
    text-transform: capitalize;
`

export const NewsContainer = styled.div`
    margin-left: ${px2vw(92)};
    margin-top: ${px2vw(20)}; 
    width: ${px2vw(1000)};
    height: ${px2vw(430)};
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${px2vw(5)};
    /* grid-row-gap: 15px; */
    z-index: 1;
    overflow-x: auto;
    background: #D9D9D9;

    @media ${device.mobileM}{
        width: ${px2vw(1000)};
        height: ${px2vw(430)};
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: ${px2vw(5)};
    }
`
export const NewsContent = styled.a`
    margin-top: ${px2vw(20)};
    margin-left: ${px2vw(15)};
    background: none;
    text-decoration:none;
`
export const NewsImg = styled.img`
    width: ${px2vw(300)};
    height: ${px2vw(170)};
    margin-right: none; 
    background: none;

    @media ${device.mobileM}{
        width: ${px2vw(450)};
        height: ${px2vw(250)};
    }
`
export const NewsTitle = styled.h2`
    width: ${px2vw(300)};
    color: #000D3F;
    font-family: Jost;
    font-size: ${px2vw(15)};
    font-style: normal;
    font-weight: 550;
    line-height: normal;
    /* letter-spacing: ${px2vw(1)}; */
    text-transform: capitalize;
    background: none;
`