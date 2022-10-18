function formatDate(date, ln) {
  const dateFormat = {
    en: "en-US",
    ru: "ru-RU",
    es: "es-ES",
  }
  let formated = date.toLocaleDateString(dateFormat[ln], { year: 'numeric', month: 'long' }); 
  // formated = formated.charAt(0).toUpperCase() + formated.slice(1);
  return formated;
}

export default formatDate;