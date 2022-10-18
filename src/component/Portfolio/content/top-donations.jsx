import preview from 'assets/img/portfolio/top-donations/preview.png';
import img1 from 'assets/img/portfolio/top-donations/1.png';

const data = {
  title: "Страница «Топ доната» для стримера",
  description: (
    <>
      <p>
        Вывод пожертвований за день/месяц/все время. В планировщике задач CRON на виртуальной машине установлено автоматическое выполнение скрипта. Скрипт выполняет запрос через  API DonatePay и получает информацию о последних пожертвованиях. Если есть новые пожертвования, то заносит их в базу данных MySQL. 3 разных SQL-запроса отвечают за 3 раздела страница страницы.
      </p>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Вывод пожертвований за день/месяц/все время." },
  ],
  customer: "Никита Арбузов",
  country: 'ru',
  date: new Date('June, 2018'),
  liveDemo: "http://92.53.91.152/top_donators/",
};

export default data;