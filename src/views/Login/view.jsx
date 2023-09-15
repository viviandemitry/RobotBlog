import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Register from '../../components/Register';
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
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  function handleEmail(e){
    setEmail(e.target.value); 
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleRegister(){
    setIsRegister(true);
  }

  function handleClick(){
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!(email.match(regexEmail)) || !(password.length >= 8)){
     setMessage('Invalid E-mail or Password') 
    } else {
     setMessage('')
     navigate("/home")
     dispatch(GetEmail(email))
    }
  }
 
  // useEffect(() => {
  //  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //  if (!(email.match(regexEmail)) || !(password.length >= 8)){
  //   setMessage('Invalid E-mail or Password') 
  //  } else {
  //   setMessage('')
  //  }
  // }, [email, password]);

  return (
    <Styles.ContainerMain>
      <Header />
      <Styles.ContentMain>
        { isRegister ? <Register setIsRegister={setIsRegister}/> : 
        <Styles.LeftContent>
          <Styles.FormTitle>
            Login
          </Styles.FormTitle>
          <Styles.AlertMessage>
            {message}
          </Styles.AlertMessage>
          <Styles.FormContent>
          <Styles.InputLabel>
            EMAIL
            <Styles.InputContent type="text" placeholder="Type your e-mail" onChange={handleEmail} />
          </Styles.InputLabel>
          <Styles.InputLabel>
            PASSWORD 
            <Styles.InputContent type="password" placeholder="Type your password" onChange={handlePassword} />
          </Styles.InputLabel>
          <Styles.RegisterButton type="button" onClick={handleRegister}>
              REGISTER
            </Styles.RegisterButton>
            <Styles.SubmitButton type="button" onClick={handleClick}>
              ACESSAR
            </Styles.SubmitButton>
          </Styles.FormContent>
        </Styles.LeftContent>
        }
        <Styles.RightContent>
        <img src={Robo} alt="Robo" />
        </Styles.RightContent>
      </Styles.ContentMain>
    </Styles.ContainerMain>
  )
}
