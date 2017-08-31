import React, { Component } from 'react';
import style from '../style.js'
import Header from './Header'
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
