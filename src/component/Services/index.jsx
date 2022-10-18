import React from 'react';
import './index.css';
import {BiCheck} from 'react-icons/bi';

import service from './data';

import lc from './locales';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ln } = this.props;
    lc.setLanguage(ln);
    return (
      <section id="services">
        <h5>{ lc.h5 }</h5>
        <h2>{ lc.h2 }</h2>

        <div className="container services__container">
          { service.map((item, i) => this.renderItem(item, i)) }
        </div>
      </section>
    );
  }

  renderItem(item, i) {
    const { groupName, list } = item;
    return (
      <article key={i} className="service">
        <div className="service__head">
          <h3>{groupName}</h3>
        </div>
        <ul className="service__list">
          { list.map((listItem, k) => this.renderListItem(listItem, k)) }
        </ul>
      </article>
    );
  }

  renderListItem(item, i) {
    return (
      <li key={i}>
        <BiCheck className="service__list-icon" />
        <p>{item}</p>
      </li>
    );
  }
}

export default Services;
