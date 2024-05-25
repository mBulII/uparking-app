import axios from "axios";

const URL = "http://192.168.43.74:8000";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${URL}/auth/registration/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${URL}/auth/login/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
