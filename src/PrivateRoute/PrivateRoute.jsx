import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();



    if (loading) {
        return (<div className="mt-50">
            <h1 className="text-5xl">Loading...</h1>
        </div>)
    };

    if (user) {
        return children;
    };

    return (
        <div>
            <Navigate to="/login" state={{from: location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;