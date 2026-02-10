import React, { createContext, useState, useContext } from "react";
import { loginUser, registerUser } from "../api/authUser";
import Toast from "react-native-toast-message";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Centralized Login Logic
  const handleLogin = async (mobile) => {
    setLoading(true);
    try {
      const data = await loginUser({ mobile });
      setUser(data.user);
      setIsLoggedIn(true);
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{ user, isLoggedIn, loading, handleLogin, handleRegister, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
