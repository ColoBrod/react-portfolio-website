import LocalizedStrings from 'react-localization';



const locales = new LocalizedStrings({
  en: {
    title: {
      h5: "Get To Know",
      h2: "About Me",
    },
    card: {
      experience: {
        h5: "Experience",
        small: "3+ Years Working",
      },
      clients: {
        h5: "Clients",
        small: "100+ Worldwide",
      },
      projects: {
        h5: "Projects",
        small: "80+ Completed",
      },
    },
    button: "Let's Talk",
    // history: historyEN,
  },
  ru: {
    title: {
      h5: "Познакомимся",
      h2: "Обо мне",
    },
    card: {
      experience: {
        h5: "Опыт",
        small: "Больше 3-х лет",
      },
      clients: {
        h5: "Клиенты",
        small: "100+ по всему миру",
      },
      projects: {
        h5: "Проекты",
        small: "80+ завершено",
      }
    },
    button: "Связаться",
    // history: historyRU,
  },
  es: {
    title: {
      h5: "Llegar a saber",
      h2: "Sobre mí",
    },
    card: {
      experience: {
        h5: "Experiencia",
        small: "3+ años trabajando",
      },
      clients: {
        h5: "Clientes",
        small: "100+ en todo el mundo",
      },
      projects: {
        h5: "Proyectos",
        small: "80+ completado",
      },
    },
    button: "Hablemos",
  }
});


export default locales;
