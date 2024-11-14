import axiosSucure from ".";

// save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
    role: "guset",
    status: "verified",
  };
  const { data } = await axiosSucure.put(`/users/${user?.email}`, currentUser);
  return data;
};
//  user role
export const userRole = async (email) => {
  const { data } = await axiosSucure(`/user/${email}`);
  return data.role;
};
// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSucure.post(`/jwt`, email);
  console.log(data);
  return data;
};

// clear cookies
export const clearCookie = async () => {
  const { data } = await axiosSucure.get("/logout");
  return data;
};
// get all user
export const getAllUsers = async () => {
  const { data } = await axiosSucure("/users");
  console.log(data);
  return data;
};
//  update user role
export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };
  const { data } = await axiosSucure.put(`/users/update/${email}`, currentUser);
  return data;
};
// request became a host
export const becameHost = async (email) => {
  const currentUser = {
    email,
    status: "Requested",
  };
  const { data } = await axiosSucure.put(`/users/${email}`, currentUser);
  return data;
};
