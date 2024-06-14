import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://192.168.43.74/api/auth";

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

export const passwordReset = async (formData) => {
  try {
    const response = await axios.post(`${URL}/password/reset/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const passwordChange = async (formData) => {
  try {
    const response = await axios.post(`${URL}/password/change/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (refreshToken) => {
  try {
    const response = await axios.post(`${URL}/logout/`, {
      refresh: refreshToken,
    });
    await AsyncStorage.removeItem("userData");
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
