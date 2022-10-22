import React from 'react';
import './index.css';
// Флаги взяты с сайта https://flagicons.lipis.dev/

import Global from 'Global';

class LnSwitcher extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.renderLn = this.renderLn.bind(this);
  }

  render() {
    const { languages } = this.props;
    return(
      <div className="ln-switcher">
        {languages.map((lang, i) => this.renderLn(lang, i))}
      </div>
    );
  }

  renderLn(lang, i) {
    const { ln } = this.context;
    return(
      <div key={i} className={`ln-switcher__ln ${ln == lang && 'active'}`} onClick={() => this.handleSwitch(lang)}>
        {lang.toUpperCase()}
      </div>
    );
  }

  handleSwitch(ln) {
    const { switchLn } = this.props;
    switchLn(ln);
  }
}

export default LnSwitcher;
