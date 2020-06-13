const initialState = {
  tour: null,
  dates: null,
  booked: false,
}

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_TOUR'):
      return {
        ...state,
        tour: action.payload
      }
    case ('BOOK_TOUR'):
      return {
        ...state,
      }
    case ('BOOKING_SUCCESS'):
      return {
        // Empty the state and back to initial state again  
        ...state,
        booked: true
      }
    default: return state
  }
}