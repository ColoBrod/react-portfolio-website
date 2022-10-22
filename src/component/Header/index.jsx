import React from 'react';
import CTA from './CTA';
import Me from '../../assets/img/me-2.jpg';
import HeaderSocials from './HeaderSocials.jsx';

import lc from './locales.js';

import Global from 'Global';

// Styles
import './index.scss';
import './media-desktop.scss';
import './media-desktop-ultrawide.scss';
import './media-tablet-portrait.scss';
import './media-tablet-landscape.scss';
import './media-mobile-portrait.scss';
import './media-mobile-landscape.scss';

class Header extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <section id="header">
        
        <div className="container header__container">
          {/* Sticky elements */}
          <HeaderSocials />
          <a href="#contacts" className="scroll__down">{lc.scrollDown}</a>

          {/* <h5>{ window.innerWidth }x{window.innerHeight}</h5> */}
          <h5>{lc.hello}</h5>
          <h1>{lc.name}</h1>
          <h5 className="text-light">{lc.speciality}</h5>
          <CTA/>
          <div className="me-wrapper">
            <div className="me">
              <img src={Me} alt="" />
            </div>
          </div>
          
        </div>
        
      </section>
    );
  }
}

export default Header;
