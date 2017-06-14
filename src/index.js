import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes'

ReactDOM.render(
  <Router routes={routes} history={browserHistory}>
  </Router>,
  document.getElementById('root')
);
