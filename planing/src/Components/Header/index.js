import React, { Component } from 'react';
import style from '../../style.js'

class Header extends Component {
  render() {
    return (
      <div><div style={style.header}> 
        <div style={style.headerTitle} > Planing System </div>
        <a style={style.headerLinks} href="http://www.aiesec.ru">Aiesec in Russia</a>
        <a style={style.headerLinks} href="http://experience.aiesec.org">Expa</a> 
        <a style={style.headerLinks} href="https://aiesec.org">Aiesec org</a>
        <button style={style.Login} > Log out </button>
        </div>
      </div>
    );
  }
}

export default Header;