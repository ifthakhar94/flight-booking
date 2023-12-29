export const SET_BOOKING_DETAILS = "SET_BOOKING_DETAILS";

export const setBookingDetails = (details) => ({
  type: SET_BOOKING_DETAILS,
  payload: details,
});

export const deleteBookingDetails = (index) => ({
  type: "DELETE_BOOKING_DETAILS",
  payload: index,
});
