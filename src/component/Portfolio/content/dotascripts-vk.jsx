import preview from 'assets/img/portfolio/dotascripts-vk/preview.png';
import img1 from 'assets/img/portfolio/dotascripts-vk/1.png';
import img2 from 'assets/img/portfolio/dotascripts-vk/2.png';
import img3 from 'assets/img/portfolio/dotascripts-vk/3.png';
import img4 from 'assets/img/portfolio/dotascripts-vk/4.png';
import img5 from 'assets/img/portfolio/dotascripts-vk/5.png';

const data = {
  title: "Сообщество VK - Дизайн, Вики-разметка",
  description: (
    <>
      Оформление паблика ВК проекта игровых скриптов <b>dotascripts</b>. Создан графический макет нескольких страниц, оформлено меню карточки товаров. Далее макет был перенесен в код c использованием Вики-разметки.
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главная страница сообщества." },
    { src: img3, comment: "Меню сообщества. Вики-разметка." },
    { src: img4, comment: "Ответы на частые вопросы. Вики-разметка." },
    { src: img5, comment: "Карточки товаров." },
    { src: img2, comment: "Статьи сообщества." },
  ],
  customer: "Иван Сергеичев",
  country: 'ru',
  date: new Date('May, 2018'),
  liveDemo: "https://vk.com/dotascripts",
};

export default data;