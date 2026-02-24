import React, { createContext, useContext, useEffect, useState } from 'react';
import { authClient } from '../lib/auth-client';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data: session, isPending } = authClient.useSession();

    const [auth, setAuth] = useState({
        isAuthenticated: false,
        userRole: null,
        userId: null,
    });

    useEffect(() => {
        if (!isPending && session?.user) {
            setAuth({
                isAuthenticated: true,
                userRole: session.user.role || 'employee',
                userId: session.user.id,
            });
        } else if (!isPending && !session?.user) {
            setAuth({
                isAuthenticated: false,
                userRole: null,
                userId: null,
            });
        }
    }, [session, isPending]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isPending }}>
            {children}
        </AuthContext.Provider>
    );
};
