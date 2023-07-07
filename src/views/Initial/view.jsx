import React from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import styled from "styled-components";

export default function Initial() {
  return (
    <div>
      <Header />
      <Styles.Container>
      <Styles.ContainerText>
        Robot intelligence
      </Styles.ContainerText>
      <Styles.ContainerTextTitle>
        Robot Ai
      </Styles.ContainerTextTitle> 
      </Styles.Container>
    </div>
  )
}
