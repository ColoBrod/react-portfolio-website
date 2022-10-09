import React from 'react';
import './index.css';

// Ротация изображений превью:
// X: 30
// Y: -15
// Z: -5

// Lan-Optic
import LanOptic from './content/lan-optic';

// LanOptic - дизайн группы ВК
// https://vk.com/lanoptic
import LanOpticVK from './content/lan-optic-vk';

// Волжанка
// https://www.cafe-volzhanka.online/
import CafeVolzhanka from './content/cafe-volzhanka';

// Коллегия Адвокатов
// http://advokat-kimry.ru/
import AdvokatKimry from './content/advokat-kimry';

// Геоэквип
// http://geoequip.ru/
import Geoequip from './content/geoequip';


// ✔️ Uni-Fitt
import UniFitt from './content/uni-fitt';

// ✔️ Uni-Fitt Шаблон письма
import UniFittEmail from './content/uni-fitt-email';

// https://www.realtysignpost.com/
import RealtySignPost from './content/realtysignpost';

// PureImagination

// ✔️ dotascripts.com
import Dotascripts from './content/dotascripts';

// ✔️ Meepo 
import DotascriptsMeepo from './content/dotascripts-meepo';

// ✔️ dotascripts-invoker
import DotascriptsInvoker from './content/dotascripts-invoker';

// ✔️ Меню группы ВК dotascripts.com
import DotascriptsVK from './content/dotascripts-vk';

// ✔️ Joel Stuurman
import JoelStuurman from './content/joel-stuurman';

// ✔️ Top Donations
import TopDonations from './content/top-donations';

// TolbertMusic
import TolbertMusic from './content/tolbertmusic';

const portfolio = [
  LanOptic,
  LanOpticVK,
  CafeVolzhanka,
  UniFitt,
  AdvokatKimry,
  UniFittEmail,
  Dotascripts,
  DotascriptsMeepo,
  Geoequip,
  DotascriptsInvoker,
  DotascriptsVK,
  JoelStuurman,
  RealtySignPost,
  TopDonations,
  TolbertMusic,
]

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          { portfolio.map((item, i) => <PortfolioItem key={i} item={item} />) }
        </div>
      </section>
    );
  }
  
}

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    // this.shortDescription = this.shortDescription.bind(this);
  }

  render() {
    const { item } = this.props;
    const { preview, title, description } = item;
    return (
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={preview} onClick={ () => this.showModalBox({ ...item }) } alt="lan-optic-1" />
        </div>
        <h3>{title}</h3>
        <p className='portfolio__item-description'>
          { this.shortDescription }
        </p>
        <div className="portfolio__item-buttons">
          <span className="btn btn-primary" onClick={ () => this.showModalBox({ ...item }) }>Подробнее</span>
        </div>
      </article>
    );
  }

  showModalBox(obj) {
    const detail = Object.assign({}, obj)
    const event = new CustomEvent('modal-box', { detail });
    document.dispatchEvent(event);
  }

  get shortDescription() {
    let string = this.props.item.description;
    console.log(string);
    if (string.length > 25) string = string.substring(0, 24) + "...";
    return string;
  }

}

export default Portfolio;
