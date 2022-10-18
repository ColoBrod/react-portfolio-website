import React from 'react';
import './index.css';

import { BsPatchCheckFill } from 'react-icons/bs';

import data from './data.js';
import lc from './locales.js';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.renderSection = this.renderSection.bind(this);
  }

  render() {
    const { ln } = this.props;
    lc.setLanguage(ln);
    
    return (
      <section id="experience">
        <h5>{lc.title.h5}</h5>
        <h2>{lc.title.h2}</h2>

        <div className="container container__experience">
          {
            data.map((section, index) => this.renderSection(section, index))
          }
        </div>

      </section>
    );
  }

  renderSection(section, index) {
    
    return(
      <div key={index} className="experience__section">
        <h3>{lc.section[section.sectionName]}</h3>
        <div className="experience__content">
          { section.skill.map((skill, i) => <Skill key={i} skill={skill} />) }
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    const { skill } = this.props;
    const { name, description } = skill;
    const lvl = lc.lvl[skill.lvl] || lc.description[description] || "";
    return(
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>{name}</h4>
          <small className="text-light">{lvl}</small>
        </div>
      </article>
    );
  }
}

export default Experience;
