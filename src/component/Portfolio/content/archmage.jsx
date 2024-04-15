import preview from 'assets/img/portfolio/archmage/preview.png';
import img1 from 'assets/img/portfolio/archmage/preview.png';
import img2 from 'assets/img/portfolio/archmage/desktop.png';
import img3 from 'assets/img/portfolio/archmage/mobile.png';

const data = {
  title: "Видео-игра \"Архимаг\" (Моб. приложение и Веб-версия)",
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
    { src: img1, comment: "Видео-игра работает в браузере и в мобильном приложении (PWA)" },
    { src: img2, comment: "Браузерная версия игры" },
    { src: img3, comment: "Мобильное приложение (PWA)" },
  ],
  customer: "Хобби-проект",
  country: 'ru',
  date: new Date('September, 2023'),
  liveDemo: "http://92.53.91.152:3001/game",
};

export default data;
