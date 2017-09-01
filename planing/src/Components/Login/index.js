import React, { Component } from 'react';
import style from '../../style'

class Login extends Component {
  render() {
    return (
      <form style={style.LoginForm} >
        <input type='email'/>
        <input type='password'/>
        <input type='submit'value='submit'/>
      </form>
    );
  }
}

export default Login;