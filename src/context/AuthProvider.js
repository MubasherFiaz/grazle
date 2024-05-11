import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [isSeller, setIsSeller] = useState(false);
  const [isuser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    isuser,
    setIsUser,
    isSeller,
    setIsSeller,
    isLoading,
    setIsLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
