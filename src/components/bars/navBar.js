import React from 'react'
import http from '../../axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import SearchBar from './searchBar'
import './bars.scss'

function NavBar(props) {
  const user = useSelector(state => state.user) || JSON.parse(localStorage.getItem('user')) || null
  const [trigger, setTrigger] = React.useState(0)
  const dispatch = useDispatch()

  let adminOrLoginOrLogout = React.useRef(null)
  React.useEffect(() => {
    const onLogout = async () => {
      dispatch({ type: 'FETCHED_USER', payload: null })
      localStorage.removeItem('user')
      await http.post('/logout')
      setTrigger(t => {
        return t + 1
      })
      props.history.push('/')
    }
    if (user && user.isAdmin) {
      adminOrLoginOrLogout.current = (
        <ul className="toright">
          <li>
            <Link className="nodecoration" to="/admin">Admin</Link>
          </li>
          <li>
            <span onClick={onLogout} className="nodecoration" to="/admin">Logout</span>
          </li>
        </ul>
      )
    } else if (user && !user.isAdmin) {
      adminOrLoginOrLogout.current = (
        <ul className="toright">
          <li>
            <span onClick={onLogout} className="nodecoration" to="/admin">Logout</span>
          </li>
        </ul>
      )
    }
    setTrigger(t => {
      return t + 1
    })
  }, [])


  return (
    <div className="navbar-main" key={trigger}>
      <nav>
        <Link className="nodecoration" to="/">Home</Link>
        <SearchBar />
        <FiMenu className="toright" size="1.5em" color="white" />
        {user ? adminOrLoginOrLogout.current :
          <ul className="toright">
            <li>
              <Link className="nodecoration" to="/login">Login</Link>
            </li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default withRouter(NavBar)