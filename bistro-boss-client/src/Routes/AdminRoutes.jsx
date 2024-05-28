import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from "prop-types";

 
const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading]=useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading || isAdminLoading) {
      return (
        <div className=" h-[70vh] flex items-center justify-center">
          <div> 
            <h2>Loading....</h2>
          </div>
        </div>
      );
    }
    if (!user && !isAdmin) {
      return <Navigate to="/login" state={location?.pathname || "/"} replace={true}></Navigate>;
    }
    return <div>{children}</div>;
};
AdminRoutes.propTypes = {
    children: PropTypes.object.isRequired,
  };
 
export default AdminRoutes;