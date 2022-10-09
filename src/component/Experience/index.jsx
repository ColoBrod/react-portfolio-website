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
          

          {/* <div className="experience__section">
            <h3>Backend Development</h3>

            <div className="experience__content">

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

            </div>
          </div>

          <div className="experience__section">
            <h3>UI/UX</h3>

            <div className="experience__content">

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

            </div>
          </div> */}

        </div>

      </section>
    );
  }

  renderSection(section, index) {
    
    return(
      <div key={index} className="experience__section">
        <h3>{lc.section[section.sectionName]}</h3>
        <div className="experience__content">
          { section.skill.map((skill, index) => <Skill skill={skill} />) }
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    const { skill } = this.props;
    const { name } = skill;
    const lvl = lc.lvl[skill.lvl];
    return(
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-light">{lvl}</small>
        </div>
      </article>
    );
  }
}

export default Experience;
