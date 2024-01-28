import React from "react"
import GoogleSignInContent from "../../components/google/GoogleSignInContent"
import { useAppContext } from "../../providers/AppProvider"

const GoogleSignInContainer = () => {
    const { language, setNotification } = useAppContext()

    const handleGoogleResponse = (response) => {
        const { credential } = response
        console.log(credential)
        if (credential) {
            setNotification({
                type: "success",
                info: language["login_messages"]["success"],
            })
        }
    }

    return <GoogleSignInContent handleGoogleResponse={handleGoogleResponse} />
}

GoogleSignInContainer.propTypes = {}

export default GoogleSignInContainer
