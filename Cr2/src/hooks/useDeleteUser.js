import axios from "axios";

export const useDeleteUser = (setUsers) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return { deleteUser };
};
