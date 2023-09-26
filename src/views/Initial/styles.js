import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const ContainerMain = styled.div`
    background-color: #000D3F;
    width: 100%;
    min-height: 100vh;
    ` 

export const ContentMain = styled.div`
    display: flex;
    width: 100%;
    /* min-height: 100vh; */
    background: #000D3F;
    /* border: solid green; */

    @media ${device.mobileM}{
        display:table-row;
    }
    `

export const ContainerTexts = styled.div`
    display:table-row;
`;

export const Text = styled.h3`
    margin-top: ${px2vw(30)};
    margin-left: ${px2vw(92)};

    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size:  ${px2vw(18)};
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;

    @media ${device.mobileM}{
        margin-top: ${px2vw(300)};
        margin-left: ${px2vw(300)};
        
        font-size:  ${px2vw(40)};
    }
`;

export const TextTitle = styled.h1`
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(89)};

    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(40)};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: ${px2vw(-1)};
    text-transform: uppercase;

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        margin-left: ${px2vw(300)};
        
        font-size:  ${px2vw(70)};
    }
`

export const TextP = styled.p`
    margin-top: ${px2vw(-20)};
    margin-left: ${px2vw(92)};
    width: ${px2vw(350)};
    flex-direction: column;

    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size: ${px2vw(13)};
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        margin-left: ${px2vw(300)};
        width: ${px2vw(550)};

        font-size:  ${px2vw(22)};
    }
`

export const ButtonInitial = styled.button`
    display: flex;
    margin-top: ${px2vw(35)};
    margin-left: ${px2vw(92)};
    width: ${px2vw(200)};
    height: ${px2vw(50)};
    padding: ${px2vw(10)} ${px2vw(10)};
    justify-content: center;
    align-items: center;
    gap: ${px2vw(10)};
    flex-shrink: 0;

    border-radius: ${px2vw(9)};
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;
    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(15)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.36)};

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        margin-left: ${px2vw(300)};
        width: ${px2vw(300)};
        height: ${px2vw(100)};

        font-size:  ${px2vw(22)};
    }

`

export const ContainerImg = styled.div`
        /* display: flex; */
        /* align-items:bottom; */
        /* margin-top: 14.44rem; */
        margin-top: ${px2vw(45)};
        margin-left: ${px2vw(10)};
        /* border: solid red; */
     
     img{
        width: ${px2vw(500)};
        height: ${px2vw(545)};
        /* flex-shrink: 0;  */
    }

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        margin-left: ${px2vw(700)};
     
        img{
        width: ${px2vw(800)};
        height: ${px2vw(900)};
        }
    }

`
export const TextRight = styled.div`
     display:table-row;
`
export const TextTitleRight = styled.h2`
    margin-top: ${px2vw(250)};
    margin-right: ${px2vw(150)};    

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: ${px2vw(40)};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: ${px2vw(-1.5)};
    text-transform: uppercase;

    @media ${device.mobileM}{
        margin-top: ${px2vw(-450)};
        margin-right: ${px2vw(-250)};
        font-size: ${px2vw(60)}; 
    }
`

export const TextPRight = styled.p`
    display: flex;
    margin-top: ${px2vw(10)};
    margin-right: ${px2vw(-120)}; 
    width: ${px2vw(350)};
    flex-direction: column;
    flex-shrink: 0;
    
    color: #FFF;
    text-align: justify;
    font-family: Jost;
    font-size: ${px2vw(13)};
    font-style: normal;
    font-weight: 400;
    line-height: 151.5%;
    letter-spacing: 0.00875rem;
    text-transform: capitalize;

    @media ${device.mobileM}{
        margin-top: ${px2vw(-10)};
        margin-left: ${px2vw(130)};
        width: ${px2vw(550)};
        font-size: ${px2vw(22)}; 
    }
`