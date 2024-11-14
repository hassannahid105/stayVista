import axiosSucure from ".";

// create payment createPaymentIntent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSucure.post("/create-payment-intent", price);
  return data;
};
// save booking info
export const saveBookingInfo = async (bookingInfo) => {
  const { data } = await axiosSucure.post("/bookings", bookingInfo);
  return data;
};
// update  booking status
export const updateStatus = async (id, status) => {
  const { data } = await axiosSucure.patch(`/rooms/status/${id}`, { status });
  return data;
};
// get all booking for a gusest by email
export const getBooking = async (email) => {
  const { data } = await axiosSucure(`/bookings?email=${email}`);
  return data;
};
// get all booking for a gusest by email
export const hostBooking = async (email) => {
  const { data } = await axiosSucure(`/bookings/host?email=${email}`);
  return data;
};
//
