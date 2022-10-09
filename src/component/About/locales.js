import LocalizedStrings from 'react-localization';

// import historyRU from './history.ru.html';

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
    p: "Amet ab repudiandae nam cumque eum Corporis sapiente atque ipsam officiis iste nihil suscipit vel Mollitia voluptate facilis neque fugit totam Minima quo quod sint doloremque rem Voluptas est ducimus",
    button: "Let's Talk",
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
        h5: "Проэкты",
        small: "80+ завершено",
      }
    },
    // p: historyRU,
    button: "Связаться",
  }
})

export default locales;
