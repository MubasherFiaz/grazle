import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isuser, setIsUser] = useState(false);

  const value = {
    isLogin,
    setIsLogin,
    isuser,
    setIsUser,
    isSeller,
    setIsSeller,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
