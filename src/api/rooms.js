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
