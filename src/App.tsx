import React from 'react';
import './App.scss';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
