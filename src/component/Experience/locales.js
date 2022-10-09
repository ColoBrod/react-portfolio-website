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
    },
    lvl: ["Beginner", "Intermediate", "Experienced"],
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
    },
    lvl: ["Начальный", "Средний", "Продвинутый"],
  },
});

export default locales;
