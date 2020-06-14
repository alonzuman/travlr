const initialState = {
  tour: {},
  reviews: []
};

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOUR':
      return {
        tour: action.payload.tour,
        reviews: action.payload.reviews
      }
    default: return state;
  }
}