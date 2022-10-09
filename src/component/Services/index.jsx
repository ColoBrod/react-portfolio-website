import React from 'react';
import './index.css';
import {BiCheck} from 'react-icons/bi';

const service = [
  {
    groupName: "Frontend",
    list: [
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
    ],
  },
  {
    groupName: "Frontend",
    list: [
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
    ],
  },
  {
    groupName: "Frontend",
    list: [
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
      "Ipsum dolor",
    ],
  },
];

class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

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
