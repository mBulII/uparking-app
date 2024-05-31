import axios from "axios";

const URL = "http://192.168.43.74:8000/auth";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${URL}/registration/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${URL}/login/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${URL}/token/refresh/`, {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (accessToken) => {
  try {
    const response = await axios.post(`${URL}/token/verify/`, {
      token: accessToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
