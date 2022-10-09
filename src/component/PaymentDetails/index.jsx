import React from 'react';
import './index.css';

import tinkoffLogo from '../../assets/img/payment-details/tinkoff.png';
import qiwiLogo from '../../assets/img/payment-details/qiwi.png';
import sberbankLogo from '../../assets/img/payment-details/sberbank2.png';

const data = [
  {
    bankName: "tinkoff",
    logo: tinkoffLogo,
    cardNumber: "5536 9140 8237 8765",
    cardStyle: {
      background: 'black',
    },
    logoStyle: {
      filter: 'invert(0.8)',
      width: "40%",
    },
    description: 
      <>
        <h3>Tinkoff</h3>
        <p>Переводом по номеру карты или по номеру телефона: </p>
        <p>+7 (968) 511-58-71 </p>
        <p>Из других банков лучше переводить через СБП (без коммисси) - Николай Федорович Л. </p>
      </>,
  },
  {
    bankName: "qiwi",
    logo: qiwiLogo,
    cardNumber: "4693 9575 5698 6656",
    cardStyle: {
      background: 'orange',
    },
    logoStyle: {
      filter: 'invert(1)',
      width: "25%",
    },
    description: 
      <>
        <h3>QIWI</h3>
        <p>Переводом по номеру карты или с другого QIWI-кошелька: </p>
        <p>+7 (920) 192-23-92 </p>
      </>,
  },
  {
    bankName: "sberbank",
    logo: sberbankLogo,
    cardNumber: "4279 3806 8354 1819",
    cardStyle: {
      background: 'green',
    },
    logoStyle: {
      width: "40%",
    },
    description: 
      <>
        <h3>Сбербанк</h3>
        <p>Переводом по номеру карты или по номеру телефона: </p>
        <p>+7 (920) 192-23-92 </p>
        <p>Николай Федорович Л.</p>
      </>,
  },
]

class PaymentDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id="payment-details">
        <h5>Как оплатить мою работу?</h5>
        <h2>Реквизиты</h2>

        <div className="container container__payment-details">
          {
            data.map((card, index) => (
              <div class="payment-method">
                <BankCard card={card} />
                <div className="payment-method__description">
                  { card.description }
                </div>
              </div>
            ))
          }
          <p>
          </p>
        </div>

      </section>
    );
  }
}

class BankCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { bankName, logo, cardNumber, cardStyle, logoStyle } = this.props.card;
    return(
      <div 
        className="bank-card"
        style={ cardStyle }
      >
        <img 
          className="bank-card__logo" 
          src={ logo } 
          alt={ bankName } 
          style={ logoStyle }
          draggable="false"
        />

        <span className="bank-card__number" onClick={this.handleClick}>
          { cardNumber }
        </span>

      </div>
    );
  }

  handleClick() {
    console.log("it works");

  }
}

export default PaymentDetails;
