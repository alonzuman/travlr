import en from '../languages/en.json'
import heb from '../languages/heb.json'

const initialState = {
  language: 'heb',
  translation: heb,
  direction: 'rtl'
}

export const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SWITCH_TO_HEBREW'):
      return {
        ...state,
        language: action.payload,
        translation: heb
      }
    case ('SWITCH_TO_ENGLISH'):
      return {
        language: action.payload,
        translation: en,
        direction: 'ltr'
      }
    default: return state;
  }
}