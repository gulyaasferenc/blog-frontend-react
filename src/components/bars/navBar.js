import React from 'react'
import http from '../../axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import SearchBar from './searchBar'
import BackDrop from '../reuse/backdrop'
import './bars.scss'

function NavBar(props) {
  const user = useSelector(state => state.user) || JSON.parse(localStorage.getItem('user')) || null
  const [trigger, setTrigger] = React.useState(0)
  const [showMenu, setShowMenu] = React.useState(false)
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
        <ul onClick={() => { setShowMenu(false) }} className="fixedmenu">
          <li>
            <Link className="nodecoration" to="/admin">Admin</Link>
          </li>
          <li>
            <span onClick={onLogout} className="nodecoration">Logout</span>
          </li>
        </ul>
      )
    } else if (user && !user.isAdmin) {
      adminOrLoginOrLogout.current = (
        <ul onClick={() => { setShowMenu(false) }} className="fixedmenu">
          <li>
            <span onClick={onLogout} className="nodecoration" >Logout</span>
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
      {showMenu ? <BackDrop killMe={() => {setShowMenu(false)}} /> : null}
      <nav>
        <Link className="nodecoration" to="/">Home</Link>
        <SearchBar />
        <FiMenu className="toright" onClick={() => { setShowMenu(!showMenu) }} size="1.5em" color="white" cursor="pointer" />
        {showMenu ? user ? adminOrLoginOrLogout.current :
          <ul onClick={() => { setShowMenu(false) }} className="fixedmenu">
            <li>
              <Link className="nodecoration" to="/login">Login</Link>
            </li>
            <li>
              <Link className="nodecoration" to="/register">Sign Up</Link>
            </li>
          </ul>
          : null}
      </nav>
    </div>
  )
}

export default withRouter(NavBar)