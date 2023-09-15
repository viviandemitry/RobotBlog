import React, {useState} from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import Robo from "../../assets/images/robo.svg";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { GetEmail } from '../../storage/slice'


export default function Register(props) {
console.log(props)
//   const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleName(e){
    setName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  async function handleClick(e){
    e.preventDefault()
    const data = {
        name,
        email,
        password
    }
    const response = await fetch('http://localhost:3000/api/cadastrar', {method: 'POST', headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),})
    console.log(response)
    props.setIsRegister(false)
  }

  return (
        <Styles.LeftContent>
          <Styles.FormTitle>
            Register
          </Styles.FormTitle>
          <Styles.FormContent>
          <Styles.InputLabel>
            NAME
            <Styles.InputContent type="text" placeholder="Type your name" onChange={handleName} />
          </Styles.InputLabel>
          <Styles.InputLabel>
            EMAIL
            <Styles.InputContent type="text" placeholder="Type your e-mail" onChange={handleEmail} />
          </Styles.InputLabel>
          <Styles.InputLabel>
            PASSWORD 
            <Styles.InputContent type="password" placeholder="Type your password" onChange={handlePassword} />
          </Styles.InputLabel>
            <Styles.SubmitButton type="submit" onClick={handleClick}>
              REGISTER
            </Styles.SubmitButton>
          </Styles.FormContent>
        </Styles.LeftContent>
  )
}
