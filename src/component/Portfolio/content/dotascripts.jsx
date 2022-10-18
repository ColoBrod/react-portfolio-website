import preview from 'assets/img/portfolio/dotascripts/preview.jpg';
import img1 from 'assets/img/portfolio/dotascripts/1.jpg';
import img2 from 'assets/img/portfolio/dotascripts/2.jpg';
import img3 from 'assets/img/portfolio/dotascripts/3.jpg';

const data = {
  title: "Сайт игровых скриптов для Dota 2",
  description: (
    <>
      <ul>
        <li>Создание дизайн-макета сайта и верстка.</li>
        <li>Перенос верстки на движок WordPress, подключение блога и статей.</li>
        <li>Подключение JivoChat. Настройка JivoChat для работы с социальными сетями, мессенджерами и почтой. Помощь в оптимизации работы Администратора и сотрудников поддержки.</li>
        <li>Динамический вывод последних видео с YouTube-канала автора.</li>
        <li>Динамический вывод статей по категорями или тегам.</li>
        <li>Создание скрипта для автоматической активации софта пользователям.</li>
        <li>Помощь с локализацией сайта для англоговорящей и испаноязычной аудиторией.</li>
      </ul>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главная страница сайта. Все блоки можно свернуть" },
    { src: img2, comment: "Вывод статей из блога (WordPress) по категориям." },
    { src: img3, comment: "Главная страница - Динамический вывод последних статей из блога." },
  ],
  customer: "Иван Сергеичев",
  country: 'ru',
  date: new Date('January, 2018'),
  liveDemo: "http://dotascripts.com",
};

export default data;