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
    scrollDown: "Вниз страницы",
    downloadCV: "Скачать резюме",
    letsTalk: "Связаться",
  },
  es: {
    hello: "¡Hola! Soy",
    name: "Nicolás Lázarev",
    speciality: "Fullstack Desarrollador Web",
    scrollDown: "Desplazarse hacia abajo",
    downloadCV: "Descargar currículum",
    letsTalk: "Hablemos",
  },
})

export default locales;
