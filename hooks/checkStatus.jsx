import { useEffect, useCallback } from "react";
import { verifyToken, refreshToken } from "../constants/api";
import { useStore } from "../stateManagement/store";

export const checkStatus = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useStore();

  const checkLoginStatus = useCallback(async () => {
    if (user) {
      try {
        await verifyToken(user.access);
        if (!isLoggedIn) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        try {
          const newTokens = await refreshToken(user.refresh);
          const updatedUser = {
            ...user,
            access: newTokens.access,
          };
          setUser(updatedUser);
          if (!isLoggedIn) {
            setIsLoggedIn(true);
          }
        } catch (refreshError) {
          setIsLoggedIn(false);
          console.error("Token verification and refresh failed:", refreshError);
        }
      }
    }
  }, [user, isLoggedIn, setIsLoggedIn, setUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      checkLoginStatus();
      console.log("one minute, running check status");
    }, 60000);
    return () => clearInterval(interval);
  }, [checkLoginStatus]);

  return isLoggedIn;
};
