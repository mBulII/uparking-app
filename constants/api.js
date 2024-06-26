import axios from "axios";

import { authURL, v1URL } from "./URL";

export const registerUser = async (formData) => {
  try {
    await axios.post(`${authURL}/registration/`, formData);
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
    await axios.post(`${authURL}/password/reset/`, formData);
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (logout, refreshToken) => {
  try {
    const response = await axios.post(`${authURL}/blacklist/`, {
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

export const carFeatures = async (formData, accessToken) => {
  try {
    const response = await axios.post(`${v1URL}/patentes/`, formData, {
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
    const response = await axios.get(`${v1URL}/patentes/`, {
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

export const fetchCarFeaturesVigilante = async (accessToken) => {
  try {
    const response = await axios.get(`${v1URL}/vigilante/patentes/`, {
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
    await axios.delete(`${v1URL}/patentes/${carId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const fetchParkingLots = async () => {
  try {
    const response = await axios.get(`${v1URL}/estacionamientos/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendNotification = async (formData, accessToken) => {
  try {
    const response = await axios.post(
      `${v1URL}/vigilante/notificaciones/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNotificationVigilante = async (accessToken) => {
  try {
    const response = await axios.get(`${v1URL}/vigilante/notificaciones/`, {
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

export const deleteNotificationVigilante = async (
  notificationId,
  accessToken
) => {
  try {
    await axios.delete(`${v1URL}/vigilante/notificaciones/${notificationId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const fetchNotificationUser = async (accessToken) => {
  try {
    const response = await axios.get(`${v1URL}/notificaciones/`, {
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

export const decreaseParkingLotCapacity = async (parkingLotId, accessToken) => {
  try {
    await axios.put(
      `${v1URL}/vigilante/decrease-capacidad/${parkingLotId}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const increaseParkingLotCapacity = async (parkingLotId, accessToken) => {
  try {
    await axios.put(
      `${v1URL}/vigilante/increase-capacidad/${parkingLotId}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const fetchSedes = async () => {
  try {
    const response = await axios.get(`${v1URL}/sedes/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendFeedback = async (formData) => {
  try {
    await axios.post(`${v1URL}/feedback/`, formData);
  } catch (error) {
    throw error;
  }
};
