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
export const LeftContent = styled.div`
    width: 31.4375rem;
    height: 46.375rem;
    flex-shrink: 0;
    margin-top:16rem;
    margin-left:9rem;
    border-radius: 1.9rem;

    border-radius: 1.875rem;
    background: rgba(20, 57, 104, 0.44);

   
`
export const FormTitle = styled.h2`
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 80.38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -3.617px;
    text-transform: uppercase;
    background: none;
    
`
export const FormContent = styled.form`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InputContent = styled.input`
    border-radius: 20px;
    background: #FFF;
    box-shadow: 2px 1px 64px 0px rgba(144, 119, 214, 0.52);
    width: 19.5625rem;
    height: 2.25rem;
    flex-shrink: 0;

    margin-top:2rem;
    margin-bottom:3rem;

`
export const InputLabel = styled.label`
    display:flex;
    justify-content: center;
    flex-direction: column;
    

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.32px;
    text-transform: capitalize;
    background: none;

`

export const SubmitButton = styled.button`
    border-radius: 9px;
    border-radius: 0.5625rem;
    border: none;
    background: linear-gradient(180deg, #112DBC 0%, rgba(34, 56, 164, 0.00) 100%);
    box-shadow: 3px 3px 50px 0 #9E89F6A6;
    margin-top:2.2rem;

    display: flex;
    width: 17.625rem;
    height: 3.625rem;
    padding: 0.9375rem 3.375rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;

    color: #FFF;
    font-family: Jost;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0225rem;

`

export const RightContent = styled.div`
    margin-top:17.6rem;
    margin-left:49rem;

    img{
        width: 51.45044rem;
        height: 56rem;
        flex-shrink: 0;
    }
`