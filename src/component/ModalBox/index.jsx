import React from 'react';

// SwiperJS
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay';

// Styles
import './index.css';

import formatDate from 'fn/format-date';

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      img: [],
      title: "",
      description: "",
      github: "",
      liveDemo: "",
      customer: "",
      country: "",
      date: null,
    }
    this.showPortfolioItem = this.showPortfolioItem.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    const { ln } = this.props;

    const { 
      display, 
      img, 
      title, 
      description, 
      customer,
      country,
      date,
      github, 
      liveDemo 
    } = this.state;
    const pagination = { 
      clickable: true,
    };
    const autoplay = { 
      delay: 2, 
      disableOnInteraction: false, 
    };
    return(
      <div className="modal-box" style={{ display }}>
        <div className="modal-box__inner">
          <div className="modal-box__header">
            <div className="modal-box__title">{ title }</div>
            <div onClick={this.hide} className="modal-box__close-btn">X</div>
          </div>
          <div className="modal-box__info">
            <span className={`modal-box__country fi fi-${country}`}></span>
            <span className="modal-box__customer">{customer},</span>
            <span className="modal-box__date">
              { date ? formatDate(date, ln) : null }
            </span>
          </div>
          <div className="modal-box__swiper-wrapper">
            <Swiper 
              modules={[Pagination, Autoplay]} //, Navigation
              className="modal-box__swiper"
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ ...pagination }}
              autoplay={{ ...autoplay }}
              // navigation={true}
            >
              {
                img.map((slide, index) => this.renderSlide(slide, index))
              }
            </Swiper>
          </div>
          <div className="modal-box__description">
            { description }
          </div>
          <div className="modal-box__buttons">
            { github && <a href={github} className="btn">GitHub</a> }
            { liveDemo && <a href={liveDemo} className="btn btn-primary">Live Demo</a> }
          </div>

        </div>
      </div>
    );
  }

  renderSlide(slide, index) {
    return(
      <SwiperSlide key={index} className="modal-box__slide">
        <figure className="modal-box__slide">
          <div className="modal-box__image-wrapper">
            <img src={ slide.src } alt="Alternative text" />
          </div>
          <figcaption>{ slide.comment }</figcaption>
        </figure>
      </SwiperSlide>
    );
  }

  componentDidMount() {
    document.addEventListener('modal-box', this.showPortfolioItem);
  }

  componentWillUnmount() {
    document.removeEventListener('modal-box', this.showPortfolioItem);

  }

  showPortfolioItem(e) {
    const { 
      title, 
      description, 
      img, 
      customer,
      country,
      date,
      github, 
      liveDemo 
    } = e.detail;
    this.setState({
      title, img, customer, country, date, description, github, liveDemo
    });
    this.show();
  }

  show() {
    this.setState({
      display: "block",
    });
  }

  hide() {
    this.setState({
      display: "none",
    });
  }
}


export default ModalBox;
