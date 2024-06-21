import React, { createContext, useState, useContext } from "react";

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [modalShown, setModalShown] = useState(false);

  return (
    <PermissionContext.Provider
      value={{
        permissionGranted,
        setPermissionGranted,
        modalShown,
        setModalShown,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => useContext(PermissionContext);
