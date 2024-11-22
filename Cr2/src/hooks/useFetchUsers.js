// import { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "https://dummyjson.com/users";

// export const useFetchUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(BASE_URL);
//         setUsers(response.data.users); 
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return { users, loading, error, setUsers };
// };
