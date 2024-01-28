import React, { createContext, useContext, useEffect, useState } from "react"
import english from "../language/en_us.json"
import spanish from "../language/es_es.json"

const AppContext = createContext()

/**
 * AppProvider component
 * @param {JSX.Element} children - component to render with application context
 * @return {JSX.Element} - component to render with application
 * */
export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState(english)

    /**
     * Handle language change events
     * @param {EventTarget} event - event with language change target.
     * **/
    const handleChangeLanguage = (event) => {
        const languageSelected = event.target.value
        switch (languageSelected) {
            case "en_us":
                setLanguage(english)
                break
            case "es_es":
                setLanguage(spanish)
                break
            default:
                setLanguage(english)
                break
        }
    }

    const value = {
        handleChangeLanguage: handleChangeLanguage,
        language: language,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)