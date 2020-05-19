import React from 'react';
import Cookie from 'js-cookie'
import Login from '../components/admin/login'
import Admin from '../components/admin/admin'

function AdminPage() {
  const token = Cookie.get('token')
  console.log(token)
  let rendered = <div></div>
  if (token) {
    rendered = <Admin></Admin>
  } else {
    rendered = (
      <div className="App">
        <Login />
      </div>
    )
  }
  return rendered
}

export default AdminPage