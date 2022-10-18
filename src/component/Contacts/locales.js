import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  // English
  en: {
    h5: "Get in touch",
    h2: "Contacts",
    form: {
      placeholder: {
        name: "Your full name",
        email: "Your Email",
        msg: "Your message",
      }
    },
    sendMsg: "Send Message",
  },

  // Русский
  ru: {
    h5: "Связаться",
    h2: "Мои контакты",
    form: {
      placeholder: {
        name: "Ваше имя",
        email: "Ваша почта",
        msg: "Ваше сообщение",
      }
    },
    sendMsg: "Отправить сообщение",
  },

  // Español
  es: {
    h5: "Ponerse en contacto",
    h2: "Contactos",
    form: {
      placeholder: {
        name: "Tu Nombre Completo",
        email: "Tu Correo Electrónico",
        msg: "Tu mensaje",
      }
    },
    sendMsg: "Enviar Mensaje",
  },
})

export default locales;
