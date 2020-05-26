import React from 'react';
import './App.scss';
import Navbar from './components/bars/navBar'
import Login from './components/admin/login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import AdminPage from './views/adminPage'
import MainView from './views/mainView'

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
      </Router>
    </div>

  )

}

export default App;
