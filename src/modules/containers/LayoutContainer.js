import React from "react"
import LayoutContent from "../components/layout/LayoutContent"
import { useAppContext } from "../providers/AppProvider"

const LayoutContainer = () => {
    const { language, handleChangeLanguage } = useAppContext()
    return (
        <LayoutContent
            language={language}
            handleChangeLanguage={handleChangeLanguage}
        />
    )
}

export default LayoutContainer
