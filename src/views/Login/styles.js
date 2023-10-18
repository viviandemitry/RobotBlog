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
    background: #000D3F;

    @media ${device.mobileM}{
        display: table-row;
    }
`

export const LeftContent = styled.div`
    width: ${px2vw(400)};
    height: ${px2vw(550)};
    flex-shrink: 0;
    margin-top: ${px2vw(20)};
    margin-left: ${px2vw(244)};
    border-radius: ${px2vw(30.4)};

    border-radius: ${px2vw(30)};
    background: rgba(20, 57, 104, 0.44);

    @media ${device.mobileM}{
        width: ${px2vw(900)};
        height: ${px2vw(1500)};
        margin-top: ${px2vw(100)};
        margin-left: ${px2vw(200)};
        padding-top: 10px;
    }
`
export const FormTitle = styled.h2`
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: ${px2vw(30)};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: ${px2vw(3)};
    text-transform: uppercase;
    background: none;

    @media ${device.mobileM}{
        font-size: ${px2vw(100)};
    }
    
`
export const FormContent = styled.form`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InputContent = styled.input`
    border-radius: ${px2vw(20)};
    width: ${px2vw(300)};
    height: ${px2vw(36)};
    flex-shrink: 0;
    margin-top: ${px2vw(30)};
    margin-bottom: ${px2vw(48)};
    text-align: center;

    background: #FFF;
    box-shadow: 2px 1px 64px 0px rgba(144, 119, 214, 0.52);
    font-size: ${px2vw(18)};

    @media ${device.mobileM}{
        width: ${px2vw(600)};
        height: ${px2vw(70)};

        font-size: ${px2vw(30)};   
    }

`
export const AlertMessage = styled.p`
    display:flex;
    justify-content: center;
    flex-direction: column;
    margin-top: ${px2vw(-25)};

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: ${px2vw(22)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: ${px2vw(1.3)};
    text-transform: capitalize;
    background: none;

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
    }
`

export const InputLabel = styled.label`
    display:flex;
    justify-content: center;
    flex-direction: column;
    
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: ${px2vw(1.3)};
    text-transform: capitalize;
    background: none;

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(60)};
    }
`
export const RegisterButton = styled.button`
    border: none;
    background: none; 
    box-shadow: none;
    margin-top: ${px2vw(-1)};
    text-decoration: underline;
    
    display: flex;
    width: ${px2vw(282)};
    height: ${px2vw(30)};
    padding: ${px2vw(10)} ${px2vw(54)};
    justify-content: center;
    align-items: center;
    gap: ${px2vw(10)};
    flex-shrink: 0;

    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(18)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.36)};

    &:hover{
        cursor:pointer;
    }

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(100)};
    }
`

export const SubmitButton = styled.button`
    border-radius: ${px2vw(9)};
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;
    margin-top: ${px2vw(35)};

    display: flex;
    width: ${px2vw(282)};
    height: ${px2vw(58)};
    padding: ${px2vw(15)} ${px2vw(54)};
    justify-content: center;
    align-items: center;
    gap: ${px2vw(10)};
    flex-shrink: 0;

    color: #FFF;
    font-family: Jost;
    font-size: ${px2vw(18)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.4)};

    &:hover{
        cursor:pointer;
    }
    
    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(120)};
        width: ${px2vw(400)};
        height: ${px2vw(90)};
    }

`

export const RightContent = styled.div`
    margin-top:${px2vw(30)};
    margin-left:${px2vw(30)};

    img{
        width: ${px2vw(600)};
        height: ${px2vw(550)};
        flex-shrink: 0;
    }

    @media ${device.mobileM}{
      margin-top: -60px;
      margin-left:${px2vw(800)};
    }
`