import preview from 'assets/img/portfolio/joel-stuurman/preview.png';
import img1 from 'assets/img/portfolio/joel-stuurman/1.png';
import img2 from 'assets/img/portfolio/joel-stuurman/2.png';
import img3 from 'assets/img/portfolio/joel-stuurman/3.png';
import img4 from 'assets/img/portfolio/joel-stuurman/4.png';
import img5 from 'assets/img/portfolio/joel-stuurman/5.png';
import img6 from 'assets/img/portfolio/joel-stuurman/6.png';

const data = {
  title: "Автоматизация счетов и контрактов, Google Apps Script.",
  description: (
    <>
      <p>
        Компания Propel занимается сдачей в аренду жилья в Филиппинах. 
      </p>
      <p>
        Файл в Google Spreadsheets хранит информацию о клиентах, арендаторах, жилье и т.д. С помощью Google Apps Script были добавлены сайдбары (формы с правой стороны документа) для удобного внесения данных. В выпадающих списках (Drop Down List) форм можно выбирать данные из других таблиц, есть поиск по ключевым словам. Созданы скрипты и тригеры для автоматической генерации контрактов в Google Documents по шаблону.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img6, comment: "Шаблон счета. Подсвеченные желтым переменные, подменяются данными из таблиц." },
    { src: img1, comment: "Шаблон контракта. Подсвеченные желтым переменные, подменяются данными из таблиц." },
    { src: img2, comment: "Таблица 'Контракты'. Добавлен сайдбар с формой. В выпадающих списках можно выбирать данные из других таблиц." },
    { src: img3, comment: "Таблица 'Платежи'. Добавлен сайдбар с формой. В выпадающих списках можно выбирать данные из других таблиц." },
    { src: img4, comment: "Таблица 'Имущество'. Добавлен сайдбар с формой. В выпадающих списках можно выбирать данные из других таблиц." },
    { src: img5, comment: "Таблица 'Контакты'. Добавлен сайдбар с формой. В выпадающих списках можно выбирать данные из других таблиц." },
  ],
  customer: "Joel Stuurman",
  country: 'ph',
  date: new Date('February, 2020'),
};

export default data;