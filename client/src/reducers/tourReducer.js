const initialState = {
  tour: {},
  reviews: [],
  isLoading: false
};

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOUR':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_TOUR':
      return {
        tour: action.payload.tour,
        reviews: action.payload.reviews,
        isLoading: false
      }
    case 'GET_TOUR_ERROR':
      return {
        ...state,
        isLoading: false
      }
    default: return state;
  }
}