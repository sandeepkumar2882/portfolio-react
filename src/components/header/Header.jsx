import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CV from '../../assets/CV-Sandeep Kumar.PDF';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sandeep Kumar</h1>
        <h5 className="text-light">Web Developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down 
        </a>
        <div className="header__socials">
          <a href="https://www.linkedin.com/in/sandeep-kumar-921b9b189" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
          <a href="https://github.com/sandeepkumar2882" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="https://instagram.com/imsandeepshailaan" target="_blank" rel="noreferrer" ><FaInstagram /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
