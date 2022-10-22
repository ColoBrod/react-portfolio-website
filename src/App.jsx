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
// import Services from './component/Services';
import Testimonials from './component/Testimonials';
import Contacts from './component/Contacts';
// import PaymentDetails from './component/PaymentDetails';
import Footer from './component/Footer';

import link from 'links';

// Context
import Global from 'Global';

const languages = ["en", "ru", "es"]; 

// TODO 

// * Автоматическое проигрывание слайдера в Портфолио
// * Отсортировать работы в портфолио
// * Поработать с адаптивностью модалки
// * Слайдер - выбирать первый слайд при открытии.
// * Гриды для выравнивания элементов по высоте.

// * Исправить ошибки компиляции, убрать Варнинги.
// * Полностью протестировать сайт перед публикацией
// * Полностью протестировать сайт после публикации


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ln: this.getWebBrowserLn(),
    }
    this.resizeObserver = new ResizeObserver(this.updateDimensions);
    this.switchLn = this.switchLn.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  render() {
    let { ln } = this.state;
    return (
      <Global.Provider value={{ln}}>
        {/* FLOATING ITEMS */}
        <Nav/>
        <LnSwitcher languages={languages} switchLn={this.switchLn} />
        <ToolTip /> 
        <ModalBox />

        {/* SECTIONS */}
        <Header />
        <About />
        <Portfolio />
        <Experience />
        <Workflow />
        {/*<Services ln={ln} />*/}
        <Testimonials />
        <Contacts />
        {/*<PaymentDetails ln={ln} />*/}
        <Footer />
      </Global.Provider>
    );
  }

  componentDidMount() {
    this.resizeObserver.observe(document.body);
  }

  componentWillUnmount() {
    this.resizeObserver.unobserve(document.body);
  }

  updateDimensions() {
    const { section } = link;
    const offsets = [];
    section.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      offsets[i] = { id, offset: el.offsetTop };
    });
    const event = new CustomEvent("dom-offsets", { detail: offsets });
    document.dispatchEvent(event);
  }

  getWebBrowserLn() {
    let ln = window.navigator.language;
    ln = ln.substring(0,2);
    switch (ln) {
      case 'ru': return 'ru';
      case 'en': return 'en';
      case 'es': return 'es';
      default: return 'ru';
    }
  }

  switchLn(ln) {
    this.setState({ ln });
  }
}

export default App;



