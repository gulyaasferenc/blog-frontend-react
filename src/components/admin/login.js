import React from 'react';
import './login.scss';
import { FiLogIn } from "react-icons/fi"

function Login() {
  return (
    <div >
      <div className="mainlogin">
        <form>
        <span className="login-title"> Login <FiLogIn size="1.5em" style={{float:'right'} }/> </span>
          <input type="text" placeholder="User"></input>
          <input type="password" placeholder="Password"></input>
          <button className="button-base" style={{float:'right'} } type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Login