import React, { createContext, useContext, useState } from "react";
import { authenticateUser } from "../services/auth/AuthService";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

/**
 * AuthProvider Component
 * */
export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({});

    /**
     * Handle the Authentication
     * @param {string} credential - JWT credential
     * */
    const handleAuthentication = (credential) => {
        const userData = jwtDecode(credential);
        console.log(userData);
        const [data, status] = authenticateUser(userData);
        if (status === 200) {
            setAuthData(data);
            window.location.href = "/dashboard";
        }
    };

    const value = {
        authData: authData,
        setAuthData: setAuthData,
        handleAuthentication: handleAuthentication,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

/**
 * AuthProvider propTypes
 * */
AuthProvider.propTypes = {
    children: PropTypes.node,
};

export const useAuthContext = () => useContext(AuthContext);
