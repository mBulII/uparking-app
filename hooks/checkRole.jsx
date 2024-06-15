import { useEffect, useCallback } from "react";
import { useStore } from "../stateManagement/store";

export const checkRole = () => {
  const { user, isGuard, setIsGuard } = useStore();

  const updateRole = useCallback(async () => {
    if (user && user.user.rol === "vigilante") {
      if (!isGuard) {
        setIsGuard(true);
      }
    } else {
      if (isGuard !== false) {
        setIsGuard(false);
      }
    }
  }, [user, isGuard, setIsGuard]);
  useEffect(() => {
    updateRole();
  }, []);

  return isGuard;
};
