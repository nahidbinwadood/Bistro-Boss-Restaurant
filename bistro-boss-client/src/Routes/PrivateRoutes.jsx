import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
 const PrivateRoutes = ( {children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
      return (
        <div className=" h-[70vh] flex items-center justify-center">
          <div> 
            <h2>Loading....</h2>
          </div>
        </div>
      );
    }
    
    if (!user) {
      return <Navigate to="/login" state={location?.pathname || "/"} replace={true}></Navigate>;
    }
    return <div>{children}</div>;
};
PrivateRoutes.propTypes = {
    children: PropTypes.object.isRequired,
  };
export default PrivateRoutes;