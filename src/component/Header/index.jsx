import React from 'react';
import './index.css';
import CTA from './CTA';
import Me from '../../assets/img/me-2.jpg';
import HeaderSocials from './HeaderSocials.jsx';

import lc from './locales.js';


class Header extends React.Component {
  render() {
    const { ln } = this.props;
    lc.setLanguage(ln);
    return (
      <section id="header">
        <div className="container header__container">
          {/* <h5>{ window.innerWidth }x{window.innerHeight}</h5> */}
          <h5>{lc.hello}</h5>
          <h1>{lc.name}</h1>
          <h5 className="text-light">{lc.speciality}</h5>
          <CTA ln={ln}/>
          <HeaderSocials />
          <div className="me">
            <img src={Me} alt="" />
          </div>
          <a href="#contacts" className="scroll__down">Scroll Down</a>
        </div>
      </section>
    );
  }
}

export default Header;
