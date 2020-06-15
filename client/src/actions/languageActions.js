export const changeLanguage = (language) => {
  localStorage.setItem('language', language)
  switch (language) {
    case ('heb'):
      return { type: 'SET_HEBREW' }
    case ('en'):
      return { type: 'SET_ENGLISH' }
    default: return { type: 'SET_HEBREW' }
  }
}

export const checkLanguage = () => dispatch => {
  const lang = localStorage.getItem('language');
  if (!lang) {
    localStorage.setItem('language', 'heb');
  } else {
    switch (lang) {
      case 'en':
        return dispatch({ type: 'SET_ENGLISH' })
      case 'heb':
        return dispatch({ type: 'SET_HEBREW' })
    }
  }
}