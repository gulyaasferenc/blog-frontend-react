import React from 'react'
import './admin.scss'
import { useRouteMatch, Route, Link } from 'react-router-dom'

import PostForm from './postForm'

function Admin() {
  const { url } = useRouteMatch()
  return (
    <div>
      <Route path={`${url}/postform`}>
        <PostForm />
      </Route>
      <Link to={`${url}/postform`}>
        <button className="button-add">+</button>
      </Link>

    </div>
  )
}

export default Admin