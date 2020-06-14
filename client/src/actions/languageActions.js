export const changeLanguage = (language) => {
  localStorage.setItem('language', language)
  switch (language) {
    case ('heb'):
      return { type: 'SWITCH_TO_HEBREW' }
    case ('en'):
      return { type: 'SWITCH_TO_ENGLISH' }
    default: return { type: 'SWITCH_TO_HEBREW' }
  }
}

export const checkLanguage = () => dispatch => {
  const lang = localStorage.getItem('language');
  if (!lang) {
    localStorage.setItem('language', 'heb');
  } else {
    switch (lang) {
      case 'en':
        return dispatch({ type: 'SWITCH_TO_ENGLISH' })
      case 'heb':
        return dispatch({ type: 'SWITCH_TO_HEBREW' })
    }
  }
}