import React, { useState } from 'react';
import './login.scss';
import { FiLogIn } from "react-icons/fi"
import { login } from '../../store/actions'
import { useDispatch } from 'react-redux'


function Login() {

  const [mail, setMail] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useDispatch()

  const changeMail = e => {
    setMail(e.target.value)
  }

  const changePassword = e => {
    setPassword(e.target.value)
  }

  const doLogin = (e) => {
    dispatch(login(mail, password))
    e.preventDefault()
  }
  return (
    <div >
      <div className="mainlogin">
        <form onSubmit={doLogin}>
          <span className="login-title"> Login <FiLogIn size="1.5em" style={{ float: 'right' }} /> </span>
          <input type="text" placeholder="User" onChange={changeMail}></input>
          <input type="password" placeholder="Password" onChange={changePassword}></input>
          <button className="button-base" style={{ float: 'right' }} type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Login