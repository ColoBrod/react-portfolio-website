import preview from 'assets/img/portfolio/realtysignpost/preview.png';
import img1 from 'assets/img/portfolio/realtysignpost/1.png';
// import img2 from 'assets/img/portfolio/realtysignpost/2.png';
import img3 from 'assets/img/portfolio/realtysignpost/3.png';
import img4 from 'assets/img/portfolio/realtysignpost/4.png';
import img6 from 'assets/img/portfolio/realtysignpost/6.png';
import img7 from 'assets/img/portfolio/realtysignpost/7.png';
import img8 from 'assets/img/portfolio/realtysignpost/8.png';

const data = {
  title: "Админ-панель, сайт Realty Sign Post",
  description: (
    <>
      Компания <b>Realty Sign Post</b> занимается установкой объявлений о продаже и сдаче в аренду недвижимости в штате Virginia. 
      <br /><br />
      Работал преимущественно с Админ-панелью и планировщиком задач CRON. Большая часть работы была связана с рефакторингом имеющегося кода, отладкой, написанием документации. Также был написан с нуля модуль "Поиск в истории заказов". Произведена оптимизация кода, скорость загрузки страниц админ-панели увеличена в 10-17,5 раз.
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главная страница. Верстка и логика блока 'Check Installation Availability'." },
    { src: img3, comment: "Админ панель - 'Активные адреса'. Здесь можно обновить и отменить заказы. Пагинация, фильтры." },
    { src: img4, comment: "Админ панель - 'Информация о заказе'. Здесь можно изменить данные о заказе." },
    { src: img6, comment: "Админ панель - 'Поиск в истории заказов'." },
    { src: img7, comment: "Редактирование профиля агента." },
    { src: img8, comment: "" },
  ],
  customer: "Ryan Myers",
  country: 'us',
  date: new Date('February, 2020'),
  liveDemo: "https://www.realtysignpost.com/",
};

export default data;