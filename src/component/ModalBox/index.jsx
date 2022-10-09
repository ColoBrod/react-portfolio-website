import React from 'react';

// SwiperJS
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Styles
import './index.css';

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
    }
    this.showPortfolioItem = this.showPortfolioItem.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    const { display, img, title, description, github, liveDemo } = this.state;
    const pagination = { clickable: true }
    return(
      <div class="modal-box" style={{ display }}>
        <div className="modal-box__inner">
          <div className="modal-box__header">
            <div className="modal-box__title">{ title }</div>
            <div onClick={this.hide} className="modal-box__close-btn">X</div>
          </div>
          <div className="modal-box__swiper-wrapper">
            <Swiper 
              modules={[Pagination]}
              className="modal-box__swiper"
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ ...pagination }}
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
          <img src={ slide.src } alt="Alternative text" />
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
    const { img, title, description, github, liveDemo } = e.detail;
    this.setState({
      title, img, description, github, liveDemo
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
