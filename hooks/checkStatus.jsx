import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verifyToken } from "../constants/api";

export const checkStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        if (accessToken) {
          await verifyToken(accessToken);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Token verification failed:", error);
      }
    };
    checkLoginStatus();
  }, []);

  return isLoggedIn;
};
