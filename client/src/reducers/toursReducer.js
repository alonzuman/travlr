const initialState = {
  count: 0,
  tours: []
};

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOURS':
      return {
        count: action.payload.count,
        tours: action.payload.tours
      }
    default: return state;
  }
}