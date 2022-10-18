import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  // English
  en: {
    h5: "Review from clients",
    h2: "Testimonials",
    description: "I like foreign languages and this has allowed me to work with interesting people from all over the world. Here I have published some reviews from the international freelancing platform {0}, where I worked before the start of the Special Military Operation in Ukraine. Further, the platform stopped working on the territory of Russia and Belarus, and my account was blocked.",
  },

  // Русский
  ru: {
    h5: "Что говорят клиенты о моей работе",
    h2: "Отзывы",
    description: "Мне нравятся иностранные языки, и это позволило мне работать с интересными людьми со всего мира. Здесь я опубликовал некоторые отзывы с международной фриланс-биржи {0}, на которой я работал до начала Специальной Военной Операции в Украине. Далее биржа остановила работу на территории России и Беларуси, а мой аккаунт был заблокирован. ",
  },

  // Español
  es: {
    h5: "Reseñas de los clientes",
    h2: "Testimonios",
    description: "Me gustan los idiomas extranjeros y esto me ha permitido trabajar con gente interesante de todo el mundo. Aquí he publicado algunas reseñas de la plataforma internacional de trabajo independiente {0}, donde trabajé antes del inicio de la Operación Militar Especial en Ucrania. Además, la plataforma dejó de funcionar en el territorio de Rusia y Bielorrusia y mi cuenta fue bloqueada.",
  },
})

export default locales;
