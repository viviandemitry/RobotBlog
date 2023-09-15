import React from 'react';
import styled from "styled-components";
import * as Styles from './styles';
import Logo from "../../assets/icons/logoicon.svg";
import User from "../../assets/icons/user.svg";
import { useSelector, useDispatch } from 'react-redux';
import { GetEmail } from '../../storage/slice'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Header() {

  const email = useSelector((state) => state.email);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(GetEmail(''))
    console.log(email)
    navigate("/login")
    
  }

  return (
    <Styles.Container>
        <Styles.ContainerLogo>
         <img src={Logo} alt="logo" />
        </Styles.ContainerLogo>
        {location.pathname === "/home" && (
        <Styles.ConfigEmailButton> 
          <img src={User} alt="user" /> 
          <Styles.Email>
            {email}
          </Styles.Email>
          <Styles.ButtonLogout onClick={handleClick}>
            Sair
          </Styles.ButtonLogout>
        </Styles.ConfigEmailButton>
        )}
    </Styles.Container>
  )
}
