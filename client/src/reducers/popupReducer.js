const initialState = {
  popupType: null,
  open: false
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP':
      return {
        popupType: action.payload,
        open: true
      };
    case 'CLOSE_POPUP':
      return {
        popupType: null,
        open: false
      };
    default: return state;
  }
}