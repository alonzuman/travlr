const initialState = {
  count: 0,
  tours: [],
  isLoading: false
};

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOURS':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_TOURS':
      return {
        count: action.payload.count,
        tours: action.payload.tours,
        isLoading: false
      }
    case 'GET_TOURS_ERROR':
      return {
        ...state,
        isLoading: false
      }
    default: return state;
  }
}