import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRouteCart = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center my-40'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to go there.'
    })

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouteCart;