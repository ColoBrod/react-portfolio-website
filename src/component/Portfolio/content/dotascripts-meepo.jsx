import preview from 'assets/img/portfolio/dotascripts-meepo/preview.jpg';
import img1 from 'assets/img/portfolio/dotascripts-meepo/1.jpg';
import img2 from 'assets/img/portfolio/dotascripts-meepo/2.jpg';
import img3 from 'assets/img/portfolio/dotascripts-meepo/3.jpg';
import img4 from 'assets/img/portfolio/dotascripts-meepo/4.jpg';

const data = {
  title: "Программа-макрос для Dota 2",
  description: (
    <>
      <p>
        Скрипт (макрос) для персонажа <b>Meepo</b> из <b>Dota 2</b>. Помогает автоматизировать рутинные действия в процессе игры, упрощает микроконтроль.
      </p>
      <p>
        В процессе моего сотрудничетсва с проектом, я написал много таких скриптов. Это один из примеров. Здесь представлен графический интерфейс программы.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главное меню программы. Здесь можно установить горячие клавиши на самые частые комбинации." },
    { src: img2, comment: "Настройка подконтрольных групп и клавиш-модификаторов." },
    { src: img3, comment: "Изменение алгоритмов работы в зависимости от предпочитаемой игроком \"обуви\"." },
    { src: img4, comment: "Чередование способностей героя." },
  ],
  customer: "Иван Сергеичев",
  country: 'ru',
  date: new Date('March, 2018'),
};

export default data;