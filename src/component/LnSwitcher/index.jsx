import React from 'react';
import './index.css';
// Флаги взяты с сайта https://flagicons.lipis.dev/
import ru from '../../assets/icon/ln/ru.svg';
import en from '../../assets/icon/ln/en.svg';
import es from '../../assets/icon/ln/es.svg';

// <img src={ru} className="ln-switcher__icon" alt="ru" />
// <img src={en} className="ln-switcher__icon" alt="en" />
// <img src={es} className="ln-switcher__icon" alt="es" />

class LnSwitcher extends React.Component {
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
    const { ln } = this.props;
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
