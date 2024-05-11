import { Navigate } from "react-router-dom";
const LoginRedirect = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default LoginRedirect;
