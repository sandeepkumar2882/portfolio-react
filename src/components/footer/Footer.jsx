import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Sandeep Kumar</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sandeep-kumar-921b9b189" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
      <a href="https://github.com/sandeepkumar2882/sandeepkumar2882/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/imsandeepshailaan?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved by Sandeep Kumar.</small>
      </div>
    </footer>
  )
}

export default Footer
