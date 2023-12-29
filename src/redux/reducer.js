import { SET_BOOKING_DETAILS } from "./actions";

const initialState = {
  bookingDetails: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKING_DETAILS":
      return {
        ...state,
        bookingDetails: [...state.bookingDetails, action.payload],
      };
    case "DELETE_BOOKING_DETAILS":
      const updatedBookingDetails = [...state.bookingDetails];
      updatedBookingDetails.splice(action.payload, 1);
      return {
        ...state,
        bookingDetails: updatedBookingDetails,
      };
    default:
      return state;
  }
};
export default rootReducer;
