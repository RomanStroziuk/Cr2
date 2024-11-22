import React, { useState } from "react";
import { fetchData } from "../utils/fetchData"; 
import UserList from "./UserList";
import { useDeleteUser } from "../hooks/useDeleteUser";
import SearchBar from "./SearchBar";
import FetchButton from "./FeatchButton";

const Container = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const { deleteUser } = useDeleteUser(setUsers);

  const handleFetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchData("https://dummyjson.com/users");
      setUsers(data.users);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <FetchButton onClick={handleFetchUsers} loading={loading} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <UserList users={filteredUsers} onDelete={deleteUser} />
        </>
      )}
    </div>
  );
};

export default Container;
