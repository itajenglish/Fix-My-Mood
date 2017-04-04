import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory,
  IndexRoute
} from 'react-router-dom'


ReactDOM.render(
  <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
  </Router>,
  document.getElementById('root')
);
