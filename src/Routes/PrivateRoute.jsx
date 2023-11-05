import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
          <div className="text-2xl text-center p-40">
            <span className="loading loading-ring loading-lg text-pink-700"></span>
          </div>
        );

    }
      if (user) {
        return children;
      }

    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};


export default PrivateRoute;