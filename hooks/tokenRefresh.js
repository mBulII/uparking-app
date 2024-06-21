import { useEffect, useCallback } from "react";
import { refreshToken } from "../constants/api";
import { useStore } from "../stateManagement/store";

export const tokenRefresh = () => {
  const {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    setIntervalId,
    clearInterval,
  } = useStore();

  const refreshTokenInterval = useCallback(async () => {
    if (user) {
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
        console.error("Token refresh failed:", refreshError);
      }
    }
  }, [user, isLoggedIn, setIsLoggedIn, setUser]);

  useEffect(() => {
    if (isLoggedIn) {
      const interval = setInterval(() => {
        refreshTokenInterval();
      }, 55000);
      setIntervalId(interval);

      return () => {
        clearInterval();
      };
    }
  }, [isLoggedIn, refreshTokenInterval, setIntervalId, clearInterval]);
};
