import axios from "axios";

import { authURL, apiURL } from "./URL";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${authURL}/registration/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${authURL}/login/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const passwordReset = async (formData) => {
  try {
    const response = await axios.post(`${authURL}/password/reset/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const passwordChange = async (formData) => {
  try {
    const response = await axios.post(`${authURL}/password/change/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (logout, refreshToken) => {
  try {
    const response = await axios.post(`${authURL}/logout/`, {
      refresh: refreshToken,
    });
    logout();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${authURL}/token/refresh/`, {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (accessToken) => {
  try {
    const response = await axios.post(`${authURL}/token/verify/`, {
      token: accessToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const carFeatures = async (formData, accessToken) => {
  try {
    const response = await axios.post(`${apiURL}/patentes/`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchCarFeatures = async (accessToken) => {
  try {
    const response = await axios.get(`${apiURL}/patentes/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteCarData = async (carId, accessToken) => {
  try {
    await axios.delete(`${apiURL}/patentes/${carId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
};