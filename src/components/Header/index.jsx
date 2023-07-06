import React from 'react';
import styled from "styled-components";
import * as Styles from './styles';
import Logo from "../../assets/icons/logoicon.svg"
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


export default function Header() {

  const email = useSelector((state) => state.email);

  const location = useLocation();

  console.log(location)

  return (
    <Styles.Container>
        <Styles.ContainerLogo>
         <img src={Logo} alt="user" />
        </Styles.ContainerLogo>
        {location.pathname === "/home" && (
          <div>  
        <Styles.Email>
          {email}
        </Styles.Email>
        <Styles.ButtonLogout>
          Sair
        </Styles.ButtonLogout>
        </div>
        )}
    </Styles.Container>
  )
}
