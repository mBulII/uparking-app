import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://127.0.0.1/api/auth";

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

export const logoutUser = async () => {
  try {
    await axios.post(`${URL}/logout/`);
    await AsyncStorage.removeItem("userData");
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
