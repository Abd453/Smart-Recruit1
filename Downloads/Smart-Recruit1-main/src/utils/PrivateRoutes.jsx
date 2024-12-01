import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import context

const PrivateRoutes = ({ allowedRoles }) => {
    const { auth } = useContext(AuthContext); // Access authentication state from context

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(auth.userRole)) {
        return <Navigate to="/" />; // Redirect to home or a "not authorized" page
    }

    return <Outlet />;
};

export default PrivateRoutes;
