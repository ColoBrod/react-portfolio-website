import preview from 'assets/img/portfolio/advokat-kimry/preview.png';
import img1 from 'assets/img/portfolio/advokat-kimry/1.png';
import img2 from 'assets/img/portfolio/advokat-kimry/2.png';
import img3 from 'assets/img/portfolio/advokat-kimry/3.png';
import img4 from 'assets/img/portfolio/advokat-kimry/4.png';
import img5 from 'assets/img/portfolio/advokat-kimry/5.png';

const data = {
  title: "Сайт-визитка для Коллегии Адвокатов",
  description: (
    <>
      <p>
        Работа выполнена в веб-студии <b>LOWEB</b>.
      </p>
      <p>
        Одностраничный сайт визитка. В шапке - основная информация о Коллегии Адвокатов и форма обратной связи. Далее - состав коллегии и предлагаемые услуги. Можно узнать дополнительную информацию о стаже, опыте работы, образовании и специализации конкретного адвоката, выбрав его из списка. Есть небольшая админ-панель, в которой адвокаты самостоятельно могут редактировать информацию о себе.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Шапка сайта - форма обратной связи." },
    { src: img5, comment: "Специализация, стаж, опыт работы, образование адвоката." },
    { src: img2, comment: "Состав коллегии." },
    { src: img3, comment: "Наши услуги." },
    { src: img4, comment: "Подвал сайта." },
  ],
  customer: "КА «Кимрская городская коллегия адвокатов»",
  country: 'ru',
  date: new Date('May, 2020'),
  liveDemo: "http://advokat-kimry.ru/",
};

export default data;