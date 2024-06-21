import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(GlobalContex)
    const presentLocation = useLocation()
    
    if (loader) {
        return <div className="flex justify-center mt-4">
            <span className="loading loading-spinner loading-lg text-[#ef2853]"></span>
        </div>
    }

    if (user) {
        return children;
    }

    else {
        return <Navigate state={presentLocation.pathname} to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;