/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../FireBase/Firebase.config";
import Loading from "./Loading";

const PrivateRoutes = ({ children }) => {
    const auth = getAuth(app)
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;
