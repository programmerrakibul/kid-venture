import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  if (currentUser) {
    return <>{children}</>;
  }

  return (
    <Navigate
      to="/signin"
      state={{ path: pathname, message: "You must login first" }}
    />
  );
};

export default ProtectedRoute;
