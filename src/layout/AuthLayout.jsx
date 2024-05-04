import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1>Auth Header</h1>
      {children}
      <h1>Auth Footer</h1>
    </div>
  );
};

export default AuthLayout;
