import React from 'react';
import Cookie from 'js-cookie'
import Login from '../components/admin/login'
import Admin from '../components/admin/admin'

function AdminPage() {
  const isAuth = Cookie.get('isAuth')
  let rendered = <div></div>
  if (isAuth) {
    rendered = (
      <div>
        <Admin />
      </div>
    )
  } else {
    rendered = (
      <div className="App">
        <Login mode="login" />
      </div>
    )
  }
  return rendered
}

export default AdminPage