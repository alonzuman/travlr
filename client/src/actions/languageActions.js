export const changeLanguage = (language) => {
  console.log(language)
  localStorage.setItem('language', language)
  switch (language) {
    case ('heb'):
      return {
        type: 'SWITCH_TO_HEBREW',
        payload: language
      }
    case ('en'):
      return {
        type: 'SWITCH_TO_ENGLISH',
        payload: language
      }
    default: return { type: 'SWITCH_TO_HEBREW' }
  }
}

export const checkLanguage = () => dispatch => {
  const lang = localStorage.getItem('language');
  if (!lang) {
    localStorage.setItem('language', 'heb');
  }
}