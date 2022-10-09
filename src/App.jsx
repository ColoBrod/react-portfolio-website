import React from 'react';

// Hover Elements
import Nav from './component/Nav';
import LnSwitcher from './component/LnSwitcher';
import ToolTip from './component/ToolTip';
import ModalBox from './component/ModalBox';

// Sections
import Header from './component/Header';
import About from './component/About';
import Experience from './component/Experience';
import Portfolio from './component/Portfolio';
import Workflow from './component/Workflow';
import Services from './component/Services';
import Testimonials from './component/Testimonials';
import Contacts from './component/Contacts';
import PaymentDetails from './component/PaymentDetails';
import Footer from './component/Footer';

// TODO 
// * Перед компиляцией (для продакшена) необходимо добавить домен в package.json
// * Change background to texture pattern
// * Исправить ошибки компиляции, убрать Варнинги.
// * Добавить модальные окна для портфолио
// * Полный перевод на Русский и Английский языки
// * Добавить нормальное резюме
// * Добавить раздел с реквизитами для оплаты
// * На скрине About добавить ссылки
// * Полностью протестировать сайт перед публикацией
// * Полностью протестировать сайт после публикации
// * Под отзывами рассказать о своих клиентах, их геолокации
// * Флажки для отзывов
// * Убрать testimonials.txt
// * Автоматическое проигрывание слайдера в Портфолио
// * Закруглить кнопки в Портфолио

const languages = ["en", "ru"]; //, "es"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ln: "en"
    }
    this.switchLn = this.switchLn.bind(this);
  }

  render() {
    let { ln } = this.state;
    return (
      <>
        <Nav ln={ln} />
        <LnSwitcher ln={ln} languages={languages} switchLn={this.switchLn} />
        <ToolTip ln={ln} /> 
        <ModalBox ln={ln} />
        <Header ln={ln} />
        <About ln={ln} />
        <Experience ln={ln} />
        <Portfolio ln={ln} />
        <Workflow ln={ln} />
        <Services ln={ln} />
        <Testimonials ln={ln} />
        <Contacts ln={ln} />
        <PaymentDetails ln={ln} />
        <Footer ln={ln} />
      </>
    );
  }

  switchLn(ln) {
    this.setState({ ln });
  }

  setScreen(id) {

  }

}


export default App;
