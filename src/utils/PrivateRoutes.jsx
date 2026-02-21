import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import context

// ── Set to true to bypass auth and freely browse all routes ──
const STANDALONE_MODE = true;

const PrivateRoutes = ({ allowedRoles }) => {
    const { auth } = useContext(AuthContext);

    // In standalone mode, skip all auth checks
    if (STANDALONE_MODE) {
        return <Outlet />;
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(auth.userRole)) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
