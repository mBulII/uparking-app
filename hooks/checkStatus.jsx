import { useState, useEffect } from "react";
import { verifyToken } from "../constants/api";
import { userData } from "./userData";

export const checkStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = userData();

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (user) {
        try {
          await verifyToken(user.access);
          setIsLoggedIn(true);
        } catch (error) {
          setIsLoggedIn(false);
          console.error("Token verification failed:", error);
        }
      }
    };
    checkLoginStatus();
  }, [user]);

  return isLoggedIn;
};
