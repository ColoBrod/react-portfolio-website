import React from 'react';
import Global from 'Global';
import './index.css';
import meAbout from '../../assets/img/me-about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import lc from './locales.js';

const history = {
  en: require('./history.en.jsx').default,
  ru: require('./history.ru.jsx').default,
  es: require('./history.es.jsx').default,
};

class About extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <section id="about">
        <h5>{lc.title.h5}</h5>
        <h2>{lc.title.h2}</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={meAbout} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">

              <article className="about__card" onClick={() => this.handleClick("#portfolio")}>
                <VscFolderLibrary className="about__icon"/>
                <h5>{lc.card.projects.h5}</h5>
                <small>{lc.card.projects.small}</small>
              </article>
              <article className="about__card" onClick={() => this.handleClick("#experience")}>
                <FaAward className="about__icon"/>
                <h5>{lc.card.experience.h5}</h5>
                <small>{lc.card.experience.small}</small>
              </article>
              <article className="about__card" onClick={() => this.handleClick("#testimonials")}>
                <FiUsers className="about__icon"/>
                <h5>{lc.card.clients.h5}</h5>
                <small>{lc.card.clients.small}</small>
              </article>
              
            </div>

            <div>
              {history[ln]}
            </div>

            <a href="#contacts" className="btn btn-primary">{lc.button}</a>
          </div>
        </div>
      </section>
    );
  }

  handleClick(anchor) {
    window.location.href = anchor;
  }
}

export default About;
