import preview from 'assets/img/portfolio/dotascripts-invoker/preview.png';
import img1 from 'assets/img/portfolio/dotascripts-invoker/1.png';
import img2 from 'assets/img/portfolio/dotascripts-invoker/2.png';
import img3 from 'assets/img/portfolio/dotascripts-invoker/3.png';
import img4 from 'assets/img/portfolio/dotascripts-invoker/4.png';
import img5 from 'assets/img/portfolio/dotascripts-invoker/5.png';

const data = {
  title: "Посадочная страница для программы проекта dotascripts",
  description: (
    <>
      <p>
        Создание дизайн-макета и верстка одностраничного сайта. На сайте демонстрируются возможности и интерфейс программы для автоматизации рутинных действий в игре <b>Dota 2 (Invoker)</b>.
      </p>
      <p>
        Одна из моих первых работ.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Шапка страницы. Анимированное изображение демонстрирует вкладки, видео показывает возможности." },
    { src: img2, comment: "Демонстрация гибких настроек оверлея. Доступные комбинации." },
    { src: img3, comment: "Видео-обзоры. Демонстрация быстрого переключения сфер проигрывается автоматически." },
    { src: img4, comment: "" },
    { src: img5, comment: "Call-to-Action, Ссылки на социальные сети." },
  ],
  customer: "Иван Сергеичев",
  country: 'ru',
  date: new Date('January, 2018'),
  liveDemo: "http://92.53.91.152/dotascripts/invoker_MUTED/",
};

export default data;