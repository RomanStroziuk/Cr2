import axios from "axios";

const BASE_URL = "https://dummyjson.com/users";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
