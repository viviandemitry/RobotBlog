import React from 'react';
import styled from "styled-components";
import * as Styles from './styles';
import Logo from "../../assets/icons/logoicon.svg";
import User from "../../assets/icons/user.svg";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


export default function Header() {

  const email = useSelector((state) => state.email);

  const location = useLocation();

  console.log(location)

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
          <Styles.ButtonLogout>
            Sair
          </Styles.ButtonLogout>
        </Styles.ConfigEmailButton>
        )}
    </Styles.Container>
  )
}
