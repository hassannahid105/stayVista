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
