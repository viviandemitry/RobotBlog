import React, {useState} from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import Robo from "../../assets/images/robo.svg";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetEmail } from '../../storage/slice'


export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e){
    setEmail(e.target.value);
    
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleClick(){
    navigate("/home")
    dispatch(GetEmail(email))
  }

  
  return (
    <Styles.ContainerMain>
      <Header />
      <Styles.ContentMain>
        <Styles.LeftContent>
          <Styles.FormTitle>
            Login
          </Styles.FormTitle>
          <Styles.FormContent>
          <Styles.InputLabel>
            EMAIL
            <Styles.InputContent type="text" placeholder="Digite seu e-mail" onChange={handleEmail} />
          </Styles.InputLabel>
          <Styles.InputLabel>
            SENHA 
            <Styles.InputContent type="password" placeholder="Digite sua senha" onChange={handlePassword} />
          </Styles.InputLabel>
            <Styles.SubmitButton type="button" onClick={handleClick}>
              ACESSAR
            </Styles.SubmitButton>
          </Styles.FormContent>
        </Styles.LeftContent>
        <Styles.RightContent>
        <img src={Robo} alt="Robo" />
        </Styles.RightContent>
      </Styles.ContentMain>
    </Styles.ContainerMain>
  )
}
