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
  es: {
    title: {
      h5: "Que Habilidades Tengo",
      h2: "Mi Experiencia",
    },
    section: {
      frontend: "Desarrollo Front-end",
      backend: "Desarrollo Back-end",
      administration: "Administracion del Sistema",
      misc: "Miscelánea",
      cms: "Sistemas de Gestión de Contenidos (CMS)",
      uiux: "Diseño Web (UI/UX)",
      desktop: "Aplicaciones de Escritorio",
      mobile: "Aplicaciones Móviles",
      lang: "Idiomas extranjeros",
    },
    lvl: ["Principiante", "Intermedio", "Experimentado"],
    description: {
      native: "Hablante Nativo",
      b2: "B2 Intermedio",
      c2: "C2 Avanzado",
    },
  },
});

export default locales;
