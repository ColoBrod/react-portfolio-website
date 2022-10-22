import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    fullName: "Nicholas Lazarev",
    copyright: "All rights reserved.",
  },
  ru: {
    fullName: "Николай Лазарев",
    copyright: "Все права защищены.",
  },
  es: {
    fullName: "Nicolás Lázarev",
    copyright: "Reservados todos los derechos.",
  },
});

export default locales;
