import preview from 'assets/img/portfolio/geoequip/preview.png';
import img1 from 'assets/img/portfolio/geoequip/1.png';
import img2 from 'assets/img/portfolio/geoequip/2.png';
import img3 from 'assets/img/portfolio/geoequip/3.png';
import img4 from 'assets/img/portfolio/geoequip/4.png';
import img5 from 'assets/img/portfolio/geoequip/5.png';
import img6 from 'assets/img/portfolio/geoequip/6.png';
import img7 from 'assets/img/portfolio/geoequip/7.png';

const data = {
  title: "Интернет-магазин на 1С-Битрикс",
  description: (
    <>
      <p>
        Работа выполнена в веб-студии <b>LOWEB</b>.
      </p>
      <p>
        Верстка по макету. Перенос верстки на <b>CMS 1С-Битрикс</b>. Динамический вывод категорий товаров и товаров. Фильтры, поиск по ключевым словам. 
      </p>
      <p>
        Парсер для таблицы Excel. Актуальный прайс на сайте выводится на основе данных из таблицы, размещенной на хостинге. Еще один скрипт отрабатывает, когда посетитель сайта нажимает "Скачать" - в таком случае таблица конвертируется в .pdf-файл. 
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главная страница интернет-магазина." },
    { src: img2, comment: "Категории товаров." },
    { src: img3, comment: "Динамический прайс-лист. Данные подгружаются из Excel-таблицы." },
    { src: img4, comment: "Раздел \"Частые вопросы\". Форма обратной связи." },
    { src: img5, comment: "Раздел \"Контакты\". Форма обратной связи." },
    { src: img6, comment: "Раздел \"Контакты\". Реквизиты компании." },
    // { src: img7, comment: "7" },
  ],
  customer: "ООО «Фабрика полевого геологического снаряжения»",
  country: 'ru',
  date: new Date('August, 2020'),
  liveDemo: "http://geoequip.ru/",
};

export default data;