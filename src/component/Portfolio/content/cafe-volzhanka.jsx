import preview from 'assets/img/portfolio/cafe-volzhanka/preview.jpg';
import img1 from 'assets/img/portfolio/cafe-volzhanka/1.png';
import img2 from 'assets/img/portfolio/cafe-volzhanka/2.png';
import img3 from 'assets/img/portfolio/cafe-volzhanka/3.png';
import img4 from 'assets/img/portfolio/cafe-volzhanka/4.png';
import img5 from 'assets/img/portfolio/cafe-volzhanka/5.png';
import img6 from 'assets/img/portfolio/cafe-volzhanka/6.png';

const data = {
  title: "Сайт на CMS 1С-Битрикс",
  description: (
    <>
      <p>
        Работа выполнена в веб-студии <b>LOWEB</b>.
      </p>
      <p>
        Сайт для <b>кафе «Волжанка»</b>, которое находится в небольшом городе Кимры. Создан на базе <b>CMS 1С-Битрикс</b>. Сайт адаптивный, хорошо отображается на всех устройствах: на компьютерах, на планшетах и на мобильных устройствах. В админ-панели можно добавлять Блюда, редактировать цены, менять контактную информацию и другие разделы сайта.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главная страница." },
    { src: img6, comment: "Оформление заказа на доставку." },
    { src: img2, comment: "Главная страница - последние отзывы." },
    { src: img3, comment: "Раздел «Мексиканская кухня». Здесь можно добавить блюда в корзину." },
    { src: img4, comment: "Информация о доставке. Геолокация." },
    { src: img5, comment: "Зоны доставки. В разных зонах стоимость доставки отличается." },
  ],
  customer: "Кафе «Волжанка»",
  country: 'ru',
  date: new Date('April, 2020'),
  liveDemo: "https://www.cafe-volzhanka.online/",
};

export default data;