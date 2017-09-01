import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './Components/App';
import Login from'./Components/Login';
import redusers from'./redusers'

let store = createStore(redusers)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  </Provider>
  ,document.getElementById('root'));
