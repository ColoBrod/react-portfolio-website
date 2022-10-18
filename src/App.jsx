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

import link from 'links';

// TODO 
// * Перед компиляцией (для продакшена) необходимо добавить домен в package.json
// * Исправить ошибки компиляции, убрать Варнинги.
// * Полный перевод на Русский и Английский языки
// * Добавить нормальное резюме
// * Добавить раздел с реквизитами для оплаты
// * На скрине About добавить ссылки
// * Полностью протестировать сайт перед публикацией
// * Полностью протестировать сайт после публикации
// * Под отзывами рассказать о своих клиентах, их геолокации
// * Убрать testimonials.txt
// * Автоматическое проигрывание слайдера в Портфолио
// * Закруглить кнопки в Портфолио
// * Отсортировать работы в портфолио
// * Убрать отступ в футере
// * Добавить контекст для переключения языка
// * Поработать с адаптивностью модалки
// * Слайдер - выбирать первый слайд при открытии.
// * Гриды для выравнивания элементов по высоте.



const languages = ["en", "ru", "es"]; //, "es"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ln: this.getBrowserLn(),
    }
    this.resizeObserver = new ResizeObserver(this.updateDimensions);
    this.switchLn = this.switchLn.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  render() {
    let { ln } = this.state;
    return (
      <>
        {/* FLOATING ITEMS */}
        <Nav ln={ln} />
        <LnSwitcher ln={ln} languages={languages} switchLn={this.switchLn} />
        <ToolTip ln={ln} /> 
        <ModalBox ln={ln} />

        {/* SECTIONS */}
        <Header ln={ln} />
        <About ln={ln} />
        <Portfolio ln={ln} />
        <Experience ln={ln} />
        <Workflow ln={ln} />
        {/* <Services ln={ln} /> */}
        <Testimonials ln={ln} />
        <Contacts ln={ln} />
        {/*<PaymentDetails ln={ln} />*/}
        <Footer ln={ln} />
      </>
    );
  }

  updateDimensions() {
    // console.clear();
    // console.log(`%cSIZE: ${document.body.clientWidth}x${document.body.clientHeight}`, "color: blue; font-size: 14px;")
    const { section } = link;
    const offsets = [];
    section.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      offsets[i] = { id, offset: el.offsetTop };
    });
    const event = new CustomEvent("dom-offsets", { detail: offsets });
    document.dispatchEvent(event);
  }

  componentDidMount() {
    this.resizeObserver.observe(document.body);
  }

  componentWillUnmount() {
    this.resizeObserver.unobserve(document.body);
  }

  getBrowserLn() {
    let ln = window.navigator.language;
    ln = ln.substring(0,2);
    switch (ln) {
      case 'ru': return 'ru';
      case 'en': return 'en';
      case 'es': return 'es';
      default: return 'en';
    }
  }

  switchLn(ln) {
    this.setState({ ln });
  }

  setScreen(id) {

  }

}


export default App;
