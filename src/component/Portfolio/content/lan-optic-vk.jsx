import preview from 'assets/img/portfolio/lan-optic-vk/preview.png';
import img1 from 'assets/img/portfolio/lan-optic-vk/1.png';
import img2 from 'assets/img/portfolio/lan-optic-vk/2.png';
import img3 from 'assets/img/portfolio/lan-optic-vk/3.png';
import img4 from 'assets/img/portfolio/lan-optic-vk/4.png';
import img5 from 'assets/img/portfolio/lan-optic-vk/5.png';
import img6 from 'assets/img/portfolio/lan-optic-vk/6.png';
import img7 from 'assets/img/portfolio/lan-optic-vk/7.png';
import img8 from 'assets/img/portfolio/lan-optic-vk/8.png';

const data = {
  preview,
  title: "Сообщество VK - Дизайн, Вики-разметка",
  description: (
    <>
      Оформление паблика ВК Интернет-провайдера <b>Лан-Оптик</b>. Создан графический макет нескольких страниц, оформлено меню карточки товаров и категорий товаров. Далее макет был перенесен в код c использованием Вики-разметки.
    </>
  ),
  img: [
    { src: img1, comment: "Главная страница сообщества." },
    { src: img2, comment: "Главная страница - меню, товары." },
    { src: img3, comment: 'Страница "Товары", подборки товаров' },
    { src: img4, comment: 'Страница "Действующие акции", Вики-разметка.' },
    { src: img5, comment: 'Страница "Расчет стоимости подключения", Вики-разметка.' },
    { src: img6, comment: 'Страница "Абонентская служба", Вики-разметка.' },
    { src: img7, comment: "Геолокация, график работы офиса." },
    { src: img8, comment: "Страница с товарами \"WiFi-Роутеры\"." },
  ],
  customer: "ООО «Лан-Оптик»",
  country: 'ru',
  date: new Date('June, 2019'),
  liveDemo: "https://vk.com/lanoptic",
};

export default data;