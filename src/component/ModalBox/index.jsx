import React from 'react';
import Global from 'Global';

// SwiperJS
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Styles
import './index.scss';
import './media-desktop.scss';
import './media-desktop-ultrawide.scss';
import './media-tablet-portrait.scss';
import './media-tablet-landscape.scss';
import './media-mobile-portrait.scss';
import './media-mobile-landscape.scss';


import formatDate from 'fn/format-date';

class ModalBox extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
    this.state = {
      visibility: "hidden",
      img: [],
      sliderOrientation: "",
      title: "",
      description: "",
      github: "",
      liveDemo: "",
      customer: "",
      country: "",
      date: null,
      swiper: null,
    }
    this.showPortfolioItem = this.showPortfolioItem.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    const { ln } = this.context;

    const { 
      visibility, 
      img, 
      sliderOrientation = "", 
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
    const autoplay = { delay: 2500, disableOnInteraction: true }
    return(
      <div className="modal-box" style={{ visibility }}>
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
              onSwiper={(swiper) => this.swiper = swiper}
              loop={true}
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
    const {sliderOrientation} = this.state;
    return(
      <SwiperSlide key={index} className="modal-box__slide">
        <figure className="modal-box__slide">
          <div className={`modal-box__image-wrapper modal-box__image-wrapper_${sliderOrientation}`}>
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
      sliderOrientation = "",
      customer,
      country,
      date,
      github, 
      liveDemo 
    } = e.detail;
    this.setState({
      title, img, sliderOrientation, customer, country, date, description, github, liveDemo
    });
    this.show();
  }

  show() {
    // Устанавливаем первый слайд
    this.swiper.activeIndex = 1;
    this.setState({
      visibility: "visible",
    });
    // Продолжаем автовоспроизведение слайдов
    this.swiper.autoplay.run();
  }

  hide() {
    this.setState({
      visibility: "hidden",
      img: [],
    });
    
  }
}


export default ModalBox;
