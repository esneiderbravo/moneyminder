import React from "react";
import { useAppContext } from "../../providers/AppProvider";
import GoogleSignInContent from "../../components/login/GoogleSignInContent";

/**
 * Google Sign In Container Component
 * @return React.JSX.Element
 * */
const GoogleSignInContainer = () => {
    const { language, setNotification } = useAppContext();

    /**
     * Handle the Google response
     * */
    const handleGoogleResponse = (response) => {
        const { credential } = response;
        if (credential) {
            setNotification({
                type: "success",
                info: language["login_messages"]["success"],
            });
        }
    };

    return <GoogleSignInContent handleGoogleResponse={handleGoogleResponse} />;
};

/**
 * Google Sign In Container propTypes
 * */
GoogleSignInContainer.propTypes = {};

export default GoogleSignInContainer;
