import React, { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// Private route

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className='mt-10 text-center'>
            <button className="btn btn-square loading"></button>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoutes;