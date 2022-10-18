import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    title: {
      h5: "What Skills I Have",
      h2: "My Experience",
    },
    section: {
      frontend: "Frontend Development",
      backend: "Backend Development",
      administration: "System Administration",
      misc: "Miscellanea",
      cms: "Content Management Systems (CMS)",
      uiux: "Web Design (UI/UX)",
      desktop: "Desktop Apps",
      mobile: "Mobile Apps",
      lang: "Foreign languages",
    },
    lvl: ["Beginner", "Intermediate", "Experienced"],
    description: {
      native: "Native Speaker",
      b2: "B2 Intermediate",
      c2: "C2 Advanced",
    },
  },
  ru: {
    title: {
      h5: "Какие навыки у меня есть",
      h2: "Мой опыт",
    },
    section: {
      frontend: "Frontend Разработка",
      backend: "Backend Разработка",
      administration: "Системеное Администрирование",
      misc: "Разное",
      cms: "Системы управления контентом (CMS)",
      uiux: "Веб-дизайн (UI/UX)",
      desktop: "Десктопные приложения",
      mobile: "Мобильные приложения",
      lang: "Иностранные языки",
    },
    lvl: ["Начальный", "Средний", "Продвинутый"],
    description: {
      native: "Родной язык",
      b2: "B2 Intermediate",
      c2: "C2 Advanced",
    },
  },
});

export default locales;
