import axios from "axios";

import { authURL, apiURL } from "./URL";

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

export const fetchCarFeaturesVigilante = async (accessToken) => {
  try {
    const response = await axios.get(`${apiURL}/vigilante/patentes/`, {
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

export const fetchParkingLots = async (accessToken) => {
  try {
    const response = await axios.get(`${apiURL}/estacionamientos/`, {
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

export const sendNotification = async (formData, accessToken) => {
  try {
    const response = await axios.post(
      `${apiURL}/vigilante/notificaciones/`,
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
    const response = await axios.get(`${apiURL}/vigilante/notificaciones/`, {
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
    await axios.delete(`${apiURL}/patentes/${notificationId}/`, {
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
    const response = await axios.get(`${apiURL}/notificaciones/`, {
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
      `${apiURL}/vigilante/decrease-capacidad/${parkingLotId}/`,
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
      `${apiURL}/vigilante/increase-capacidad/${parkingLotId}/`,
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
    const response = await axios.get(`${apiURL}/sedes/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendFeedback = async (formData) => {
  try {
    await axios.post(`${apiURL}/feedback/`, formData);
  } catch (error) {
    throw error;
  }
};
