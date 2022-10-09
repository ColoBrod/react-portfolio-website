import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    header: "Home",
    about: "About",
    experience: "Experience",
    portfolio: "Portfolio",
    services: "Services",
    contacts: "Contacts",
  },
  ru: {
    header: "На главную",
    about: "Обо мне",
    experience: "Опыт работы",
    portfolio: "Портфолио",
    services: "Услуги",
    contacts: "Контакты",
  },
});

export default locales;
