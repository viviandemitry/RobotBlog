import React from 'react';
import styled from "styled-components";
import * as Styles from './styles';
import Logo from "../../assets/icons/logoicon.svg"


export default function Header() {
  return (
    <Styles.Container>
        <Styles.ContainerLogo>
         <img src={Logo} alt="user" />
        </Styles.ContainerLogo>
    </Styles.Container>
  )
}
