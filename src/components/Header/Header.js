import React from 'react';
import {Link, IndexLink} from 'react-router';
import './Header.less';
var LogoImg = require('../../images/logo-dark.svg');



const Header = () => {
  return(
    <header className="header-app">
      <div className="container">
        <div className="header-app__wrapper">
          <div className="header-app__left">
            <a href="/">
              <img className="header-app__logo" src={LogoImg} alt=""/>
            </a>
          </div>
          <nav className="header-app__nav navbar">
            <IndexLink className="navbar-link" to="/" activeClassName="active">Explore</IndexLink>
            <Link className="navbar-link" to="/create" activeClassName="active">Create</Link>
            <IndexLink className="navbar-link" to="/presets" activeClassName="active">Presets</IndexLink>
            <IndexLink className="navbar-link" to="/exports" activeClassName="active">Export</IndexLink>
          </nav>
        </div>
      </div>
    </header>
  )
};



export default Header;


