import React, { useState } from 'react';
import './login.scss';
import { FiLogIn } from "react-icons/fi"
import { login, register } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'


function Login(props) {

  const [fields, setFields] = useState({
    mail: null,
    name: null,
    password: null,
    password2: null
  })

  const dispatch = useDispatch()
  const changeMail = e => {
    setFields({ ...fields, mail: e.target.value })
  }

  const changePassword = e => {
    setFields({ ...fields, password: e.target.value })
  }

  const changePassword2 = e => {
    setFields({ ...fields, password2: e.target.value })
  }

  const changeName = e => {
    setFields({ ...fields, name: e.target.value })
  }

  const checkFields = () => {
    let isOK = true
    const alerts =[]
    if (props.mode === 'register') {
      Object.keys(fields).forEach(x => {
        if (!fields[x]) {
          alerts.push(x)
          isOK = false
        }
      })
    } else {
      if (!fields.mail || !fields.password) {
        alerts.push('email and password fields')
        isOK = false
      }
    }
    if (!isOK) {
      alert(`${alerts.join(', ')} ${alerts.length > 1 ? 'are' : 'is'} mandatory!`)
    }
    
    return isOK
  }

  const doLogin = (e) => {
    if (!checkFields()) {
      return
    }
    dispatch(login(fields.mail, fields.password))
    e.preventDefault()
    props.history.push('/')
  }

  const doRegister = (e) => {
    if (!checkFields()) {
      return
    }
    if (fields.password !== fields.password2) {
      alert('Passwords are not same')
      return
    }
    dispatch(register(fields.mail, fields.password, fields.name))
    e.preventDefault()
    props.history.push('/')
  }
  return (
    <div >
      <div className="mainlogin">
        <form onSubmit={props.mode === "login" ? doLogin : doRegister}>
          <span className="login-title"> {props.mode === "register" ? 'Sign Up' : 'Login'} <FiLogIn size="1.5em" style={{ float: 'right' }} /> </span>
          <input type="email" placeholder="Email" onChange={changeMail}></input>
          {props.mode === "register" ? <input type="text" placeholder="Name" onChange={changeName}></input> : null}
          <input type="password" placeholder="Password" onChange={changePassword}></input>
          {props.mode === "register" ? <input type="password" placeholder="Password Again" onChange={changePassword2}></input> : null}
          <button className="button-base" style={{ float: 'right' }} type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login)