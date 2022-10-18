import preview from 'assets/img/portfolio/tolbertmusic/preview.png';
import img1 from 'assets/img/portfolio/tolbertmusic/1.png';
import img2 from 'assets/img/portfolio/tolbertmusic/2.png';
import img3 from 'assets/img/portfolio/tolbertmusic/3.png';
import img4 from 'assets/img/portfolio/tolbertmusic/4.png';

const data = {
  title: "Онлайн-тренажер, музыкальная грамота",
  description: (
    <>
      Онлайн-тренажер для академии <b>Tolbert Music</b>. Помогает студентам <b>Tolbert Music</b> овладеть основами музыкальной грамоты. 
      <br /><br />
      <b>Выполнено:</b>
      <ul>
        <li>Верстка по макету (предоставлен другим дизайнером)</li>
        <li>Подбор звуков нот.</li>
        <li>Автоматическая генерация изображений на сервере, иллюстрирующих текущую ноту на нотном стане.</li>
        <li>Логика тренажера (в т.ч. выбор уровня сложности, количества итераций для запоминания ноты, рандомайзер для упражнений, обратная связь на решения ученика)</li>
      </ul>
    </>
  ),
  preview,
  img: [
    { src: img1, comment: "Главное меню приложения. Здесь можно выбрать уровень сложности." },
    { src: img3, comment: "В случае некорректного ответа, нота подсвечивается красным, в случае правильного - зеленым." },
    { src: img2, comment: "Уровень сложности - Adept." },
    { src: img4, comment: "Меню дополнительных настроек" },
  ],
  customer: "Dan Jenkinks",
  country: 'gb',
  date: new Date('January, 2020'),
  liveDemo: "https://www.tolbertmusic.net/"
};

export default data;