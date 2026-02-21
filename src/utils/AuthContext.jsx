import React, { createContext, useContext, useEffect, useState } from 'react';

// ── Backend-independent mode ──────────────────────────────────────────
// Set this to true when you want to preview the frontend without the
// backend running.  When false the original better-auth flow is used.
const STANDALONE_MODE = true;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isPending, setIsPending] = useState(!STANDALONE_MODE);

    const [auth, setAuth] = useState({
        isAuthenticated: false,
        userRole: null,
        userId: null,
    });

    useEffect(() => {
        if (STANDALONE_MODE) {
            // In standalone mode we just stay unauthenticated so the
            // public pages (landing, login, signup, 404 …) can be
            // reviewed without hitting the API.
            setIsPending(false);
            return;
        }

        // ── Original better-auth flow (used when backend IS running) ──
        let cancelled = false;
        (async () => {
            try {
                const { createAuthClient } = await import('better-auth/react');
                const authClient = createAuthClient({
                    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8001',
                });

                // better-auth's useSession is a React hook so we can't call
                // it here; instead we do a one-off fetch of the session.
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL || 'http://localhost:8001'}/api/auth/get-session`,
                    { credentials: 'include' }
                );
                const session = res.ok ? await res.json() : null;

                if (!cancelled) {
                    if (session?.user) {
                        setAuth({
                            isAuthenticated: true,
                            userRole: session.user.role || 'employee',
                            userId: session.user.id,
                        });
                    }
                    setIsPending(false);
                }
            } catch {
                if (!cancelled) setIsPending(false);
            }
        })();
        return () => { cancelled = true; };
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isPending }}>
            {children}
        </AuthContext.Provider>
    );
};
