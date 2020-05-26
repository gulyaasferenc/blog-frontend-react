import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './bars.scss'

function NavBar() {
  const user = useSelector(state => state.user)
  let adminOrLogin = null
  if (user && user.isAdmin) {
    adminOrLogin = (
      <li>
        <Link className="nodecoration" to="/admin">Admin</Link>
      </li>
    )
  } else {
    adminOrLogin = (
      <li>
        <Link className="nodecoration" to="/login">Login</Link>
      </li>
    )
  }
  return (
    <div className="navbar-main">
      <nav>
        <ul className="horizontal">
          <li>
            <Link className="nodecoration" to="/">Home</Link>
          </li>
          {adminOrLogin}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar