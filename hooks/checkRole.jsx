import { useState, useEffect } from "react";
import { userData } from "./userData";

export const checkRole = () => {
  const [isGuard, setIsGuard] = useState(null);
  const user = userData();

  useEffect(() => {
    if (user && user.user.rol === "vigilante") {
      setIsGuard(true);
    }
  }, [user]);

  return isGuard;
};
