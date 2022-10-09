import React from 'react';
import './index.css';

// Icons
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';



class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <a className="footer__logo" href="#">
          Николай Лазарев
        </a>

        <ul className="footer__permalinks">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://instagram.com"><FiInstagram /></a>
          <a href="https://twitter.com"><IoLogoTwitter /></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Николай Лазарев. All rights reserved.</small>
        </div>

      </div>

    );
  }
}

export default Footer;
