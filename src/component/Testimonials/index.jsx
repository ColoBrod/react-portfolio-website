import React from 'react';

// SwiperJS
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import img1 from '../../assets/img/client/1.jpeg';
import img2 from '../../assets/img/client/2.jpeg';
import img3 from '../../assets/img/client/3.jpeg';
import img4 from '../../assets/img/client/4.jpeg';
import img5 from '../../assets/img/client/5.jpeg';
import img6 from '../../assets/img/client/6.jpeg';
import img7 from '../../assets/img/client/7.jpeg';
import img8 from '../../assets/img/client/8.jpeg';
import img9 from '../../assets/img/client/9.jpeg';

const data = [
  {
    name: "Ceilidh McGrath",
    img: img1,
    country: "ru",
    date: new Date(),
    review: "Nicholas did good work and goes the exstra mile to do the job in a good matterNicholas did good work and goes the exstra mile to do the job in a good matter",
  },
  {
    name: "Ceilidh McGrath",
    img: img2,
    country: "es",
    date: new Date(),
    review: "Nicholas did good work and goes the exstra mile to do the job in a good matter",
  },
  {
    name: "Ceilidh McGrath",
    img: img3,
    country: "us",
    date: new Date(),
    review: "Nicholas did good work and goes the exstra mile to do the job in a good matter",
  },
  // {
  //   name: "Ceilidh McGrath",
  //   img: img4,
  //   country: "ua",
  //   date: new Date(),
  //   review: "Nicholas did good work and goes the exstra mile to do the job in a good matter",
  // },
  // {
  //   name: "Ceilidh McGrath",
  //   img: img5,
  //   country: "ru",
  //   date: new Date(),
  //   review: "Nicholas did good work and goes the exstra mile to do the job in a good matter",
  // },
  // {
  //   name: "Ceilidh McGrath",
  //   img: img6,
  //   country: "fi",
  //   date: new Date(),
  //   review: "Nicholas did good work and goes the exstra mile to do the job in a good matter",
  // },
];

class Testimonials extends React.Component {
  render() {
    const pagination = { clickable: true }
    return (
      <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper 
          modules={[Pagination]}
          className="container container__testimonials"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ ...pagination }}
        >
          {
            data.map((testimonial, index) => 
              this.renderItem(testimonial, index))
          }
        </Swiper>
      </section>
    );
  }

  renderItem(testimonial, index) {
    const { name, img, country, date, review } = testimonial;
    return(
      <SwiperSlide key={index} className="testimonial">
        <div className="client__avatar">
          <img src={img} alt="client__avatar" />
        </div>
        <div>
          <h5 className="client__name">{name}</h5>
          <small className='client__review'>{review}</small>
        </div>
      </SwiperSlide>
    );
  }
}

export default Testimonials;
