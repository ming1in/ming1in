import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

function App(): React.ReactElement {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
