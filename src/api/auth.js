import axiosSucure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guset",
    status: "verified",
  };
  const { data } = await axiosSucure.put("/users/:email", currentUser);
  console.log(data);
};
