import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    hello: "Hello I'm",
    name: "Nicholas Lazarev",
    speciality: "Fullstack Developer",
    scrollDown: "Scroll Down",
  },
  ru: {
    hello: "Здравствуйте! Меня зовут",
    name: "Николай Лазарев",
    speciality: "Fullstack веб-разработчик",
    scrollDown: "Вниз",
  }
})

export default locales;
