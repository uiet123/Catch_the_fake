import { useContext } from "react";
import { store } from "../store/ContextAPI";
import { Navigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(store);

  if (loading) return <LoadingPage />;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
