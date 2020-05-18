import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Cookie from 'js-cookie'
import Login from './components/login'

function App() {
  const token = Cookie.get('token')
  console.log(token)
  let rendered = <div></div>
  if (token) {
    rendered = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } else {
    rendered = (
    <div className="App">
      <Login />
    </div>
    )
  }
  return rendered
}

export default App;
