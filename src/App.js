import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import AdminPage from './views/adminPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminPage></AdminPage>
        </Route>
      </Switch>
    </Router>
  )
  
}

export default App;
