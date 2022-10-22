import React from 'react';
import CV from 'assets/Лазарев Николай, резюме - Fullstack-разработчик.pdf';

import lc from './locales';

import Global from 'Global';

class CTA extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
  }

  render() {
    const {ln} = this.context;
    lc.setLanguage(ln);
    return (
      <div className="cta">
        <a href={CV} download className="btn">{lc.downloadCV}</a>
        <a href="#contacts" className="btn btn-primary">{lc.letsTalk}</a>
      </div>
    );
  }
}

export default CTA;
