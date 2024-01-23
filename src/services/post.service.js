import axios from 'axios';

// Define your API base URL
// const BASE_URL = "https://the-run-machine-backend.onrender.com/api/";
const BASE_URL = "http://localhost:5000/api/";
const token = JSON.parse(localStorage.getItem("the_run_machine_user_token")) ? JSON.parse(localStorage.getItem("the_run_machine_user_token"))  : "no-token";
const config = {
  headers: {
    content: "multipart/form-data",
    Authorization: "Bearer " + token,
  },
};

export const create = async (formData) => {
    try {
      const response = await axios.post(BASE_URL+"post/create", formData, config );
      return (response);
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
};
export const getPostList = async (formData) => {
  try {
    const response = await axios.get(BASE_URL+"post/", config );
    return (response);
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};

