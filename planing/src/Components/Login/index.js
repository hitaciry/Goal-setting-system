import React, { Component } from 'react';
import style from '../../style'

class Login extends Component {
  render() {
    return (
      <form >
        <input type='email'/>
        <input type='password'/>
        <input tyoe='submit'/>
      </form>
    );
  }
}

export default Login;