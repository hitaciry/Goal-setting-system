import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './Components/App';
import Login from'./Components/Login';
import redusers from'./redusers'

let store = createStore(redusers)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={Login}/>
    </Router>
  </Provider>
  ,document.getElementById('root'));
