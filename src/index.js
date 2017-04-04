import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import Display from './components/Display';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/display/:mood" component={Display} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
