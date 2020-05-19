import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './bars.scss'

function NavBar() {
  const user = useSelector(state => state.user)
  let admin = null
  if (user && user.isAdmin) {
    admin = (
      <li>
        <Link to="/admin">Admin</Link>
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
          <li>
            <Link className="nodecoration" to="/login">Login</Link>
          </li>
          {admin}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar