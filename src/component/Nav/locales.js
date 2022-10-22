import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    header: "Home",
    about: "About",
    experience: "Experience",
    portfolio: "Portfolio",
    workflow: "Workflow",
    services: "Services",
    testimonials: "Testimonials",
    contacts: "Contacts",
    "payment-details": "Payment Details",
  },
  ru: {
    header: "На главную",
    about: "Обо мне",
    experience: "Опыт работы",
    portfolio: "Портфолио",
    workflow: "Рабочий процесс",
    services: "Услуги",
    testimonials: "Отзывы",
    contacts: "Контакты",
    "payment-details": "Реквизиты",
  },
  es: {
    header: "Hogar",
    about: "Sobre mí",
    experience: "Experiencia",
    portfolio: "Portafolio",
    workflow: "Flujo de Trabajo",
    services: "Servicios",
    testimonials: "Testimonios",
    contacts: "Contactos",
    "payment-details": "Detalles del Pago",
  },
});

export default locales;
