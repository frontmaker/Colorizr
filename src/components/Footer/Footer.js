import React from 'react';
import './Footer.less';
var logoImg = require('../../images/logo-light.svg');


const Footer = () => {
  return(
    <footer className="footer-app">
      <div className="container">
        <div className="footer-app__wrapper">
          <a href="/">
            <img className="footer-app__logo" src={logoImg} alt=""/>
          </a>
          <p className="footer-app__sign">Build with React, Redux, React Router by <a href="#">Evgenyi Akishin</a></p>
        </div>
      </div>
    </footer>
  )
};


export default Footer;
