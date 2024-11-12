import axiosSucure from ".";
// fetch all rooms
export const getAllRooms = async () => {
  const { data } = await axiosSucure("/rooms");
  return data;
};

// fetch single room data from db
export const getRoom = async (id) => {
  const { data } = await axiosSucure(`/room/${id}`);
  return data;
};
// save a room data in db
export const addRoom = async (roomData) => {
  const { data } = await axiosSucure.post("/rooms", roomData);
  return data;
};

// fetch all rooms for host
export const getHostRooms = async (email) => {
  const { data } = await axiosSucure(`/rooms/${email}`);
  console.log(data);
  return data;
};
