import axios from 'axios';

// Define your API base URL
const BASE_URL = "http://localhost:5000/api/";
const token = JSON.parse(localStorage.getItem("the_run_machine_user_token")) ? JSON.parse(localStorage.getItem("the_run_machine_user_token"))  : "no-token";
const config = {
  headers: {
    content: "multipart/form-data",
    Authorization: "Bearer " + token,
  },
};

export const signUp = async (formData) => {
    try {
      const response = await axios.post(BASE_URL+"user/sign_up",formData );
      return (response);
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  export const VerifyOtpApi = async (formData) => {
    try {
      const response = await axios.post(BASE_URL+"user/verify_otp",formData );
      return (response);
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  export const loginApi = async (formData) => {
    try {
      const response = await axios.post(BASE_URL+"user/login",formData );
      return (response);
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  export const updateUserApi = async (formData) => {
    try {
      const response = await axios.put(BASE_URL+"user/update_profile",formData,config);
      return (response);
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error('Error fetching data:', error);
      throw error;
    }
  };
