import React from "react"
import { GoogleLogin } from "@react-oauth/google"

const GoogleSignInContent = ({ handleGoogleResponse }) => {
    return (
        <GoogleLogin
            onSuccess={handleGoogleResponse}
            onFailure={handleGoogleResponse}
            cookiePolicy={"single_host_origin"}
        />
    )
}

GoogleSignInContent.propTypes = {}

export default GoogleSignInContent
