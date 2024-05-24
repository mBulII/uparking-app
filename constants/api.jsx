import axios from "axios";

const BASE_URL = "http://192.168.43.74:8000";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/registration/`,
      formData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
