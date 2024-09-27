import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null); // State to store user ID

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId"); // Get userId from local storage
    console.log("Checking auth token:", token);

    if (token) {
      setIsAuthenticated(true);
      setUserId(storedUserId); // Set userId if it exists
      console.log("User is authenticated");
    } else {
      setIsAuthenticated(false);
      setUserId(null); // Reset userId if not authenticated
      console.log("User is not authenticated");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId"); // Clear userId on logout
    setIsAuthenticated(false);
    setUserId(null); // Reset userId
    console.log("User logged out");
  };

  const login = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId); // Store userId in local storage
    setIsAuthenticated(true);
    setUserId(userId); // Store userId in state
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, login, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
