import React from 'react';
import CV from 'assets/Лазарев Николай, резюме - Fullstack-разработчик.pdf';

import lc from './locales';

class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ln} = this.props;
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
