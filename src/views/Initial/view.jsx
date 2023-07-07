import React from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import styled from "styled-components";
import Robo from "../../assets/images/robo.svg";

export default function Initial() {
  return (
    <div>
      <Header />
      <Styles.ContainerMain>
        <Styles.ContainerTexts>
          <Styles.Text>
            Robot intelligence
          </Styles.Text>
          <Styles.TextTitle>
            Robot Ai
          </Styles.TextTitle> 
          <Styles.TextP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi, diam elementum amet felis nibh. Pulvinar elementum ornare pharetra leo tellus id. Elementum tempus, cursus ac imperdiet tellus ornare duis vel. Lacus, lacus volutpat vulputate egestas in.
          </Styles.TextP>
          <Styles.ButtonInitial>
            Acesse Agora
          </Styles.ButtonInitial>
        </Styles.ContainerTexts>
        <Styles.ContainerImg>
          <img src={Robo} alt="Robo" />
        </Styles.ContainerImg>
        <Styles.TextRight>
          <Styles.TextTitleRight>
             New technology
          </Styles.TextTitleRight>
          <Styles.TextPRight>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi, diam elementum amet felis nibh. Pulvinar elementum ornare pharetra leo tellus id. Elementum tempus, cursus ac imperdiet tellus ornare duis vel. Lacus, lacus volutpat vulputate egestas in.
          </Styles.TextPRight>
        </Styles.TextRight>
      </Styles.ContainerMain>
    </div>
  )
}
