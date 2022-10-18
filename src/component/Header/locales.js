import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    hello: "Hello I'm",
    name: "Nicholas Lazarev",
    speciality: "Fullstack Developer",
    scrollDown: "Scroll Down",
    downloadCV: "Download CV",
    letsTalk: "Let's talk",
  },
  ru: {
    hello: "Здравствуйте! Меня зовут",
    name: "Николай Лазарев",
    speciality: "Fullstack веб-разработчик",
    scrollDown: "Вниз",
    downloadCV: "Скачать резюме",
    letsTalk: "Связаться",
  }
})

export default locales;
