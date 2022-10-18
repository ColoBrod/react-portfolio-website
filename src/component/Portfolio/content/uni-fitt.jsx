import preview from 'assets/img/portfolio/uni-fitt/preview.png';
import img1 from 'assets/img/portfolio/uni-fitt/1.png';
import img2 from 'assets/img/portfolio/uni-fitt/2.png';
import img3 from 'assets/img/portfolio/uni-fitt/3.png';
import img4 from 'assets/img/portfolio/uni-fitt/4.png';
import img5 from 'assets/img/portfolio/uni-fitt/5.png';
import img6 from 'assets/img/portfolio/uni-fitt/6.png';
import img7 from 'assets/img/portfolio/uni-fitt/7.png';
import img8 from 'assets/img/portfolio/uni-fitt/8.png';
import img9 from 'assets/img/portfolio/uni-fitt/9.png';

const data = {
  title: "Интернет-магазин на базе CMS Netcat",
  description: (
    <>
      <p>
        <b>ООО «Платформа»</b> - это дистрибьютор бренда <b>Uni-fitt</b> на территории России.
      </p>
      <p>
        Сайт построен на основе <b>CMS Netcat</b>. Работа с:
      </p>
      <ul>
        <li>Компонентами, инфоблоками и объектами CMS</li>
        <li>Макетами</li>
        <li>Модулями</li>
        <li>Виджетами</li>
        <li>Зарегистрированными пользователями и правами доступа</li>
        <li>Администрирование сервера и базы данных</li>
        <li>Верстка отдельных разделов по ТЗ</li>
        <li>Работа с планировщиком задач CRON</li>
        <li>API Яндекс-карт</li>
        <li>Настройка почтового сервера SMTP и автоматизация рассылки рекламных писем и уведомлений.</li>
      </ul>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Динамический вывод товаров (варианты), принадлежащих родительскому товару из базы данных." },
    { src: img2, comment: "Главная страница. Динамическое отображение слайдов и разделов сайта." },
    { src: img3, comment: "Разделы товаров первого уровня." },
    { src: img6, comment: "Вывод коллекций товаров. Каждая карточка представляет группу товаров." },
    { src: img5, comment: "Вывод категорий товаров. Каждая карточка содержит несколько коллекций товаров." },
    { src: img4, comment: "Вывод категорий товаров. Каждая карточка содержит несколько коллекций товаров." },
    { src: img7, comment: "Динамический вывод характеристик товара. Аналоги, Комплект и Документация к товару." },
    { src: img8, comment: "API Yandex-карты. При выборе способа самовывоза, кластерами отображаются пункты." },
    { src: img9, comment: "Слайдер с изображениями товара." },
  ],
  customer: "ООО «Платформа»",
  country: 'ru',
  date: new Date('July, 2022'),
  liveDemo: "https://uni-fitt.shop/",
};

export default data;