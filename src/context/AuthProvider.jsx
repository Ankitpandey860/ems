import React, { createContext, useState, useEffect } from "react";
import { getlocalstorage, setlocalstorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {

    // Only initialize if not already present
    if (!localStorage.getItem("employees")) {
      setlocalstorage();
    }

    const { employeesData, adminData } = getlocalstorage();

    setUserData({
      employees: employeesData || [],
      admin: adminData || []
    });

  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;