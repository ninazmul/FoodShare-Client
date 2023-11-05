import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
          <div className="text-2xl text-center p-40">
            <span className="loading loading-ring loading-xl text-pink-700"></span>
          </div>
        );

    }
      if (user) {
        return children;
      }

    return <Navigate to="/signIn"></Navigate>
};


export default PrivateRoute;