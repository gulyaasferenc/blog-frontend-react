import React from 'react'
import Link from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {admin}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar