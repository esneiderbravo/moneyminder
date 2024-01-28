import React, { useEffect, useState } from "react"
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material"
import Main from "./modules/components/Main"
import { AppProvider } from "./modules/providers/AppProvider"

const familyFont = ["Skratch Punk", "Poppins", "Maven Pro"].join(",")
const theme = createTheme({
    body: {
        width: "100%",
        margin: 0,
        overflowX: "hidden",
        backgroundColor: "#282c34",
    },
    palette: {
        type: "light",
        primary: {
            main: "#013C6D",
        },
        secondary: {
            main: "#0F5FC1",
            light: "#076DE0",
        },
        success: {
            main: "#00845A",
        },
        black: {
            main: "#000",
        },
        white: {
            main: "#fff",
        },
        neutral: {
            main: "#b8bcd1",
            light: "#fcfcfc",
            grey: "#4C5258",
        },
        blue: {
            deep: "#233446",
        },
        warning: {
            main: "#FFA800",
        },
        error: {
            main: "#E42444",
        },
        status: {
            success: {
                label: "#005C3A",
                background: "#F0FFFA",
            },
            warning: {
                label: "#9F4900",
                background: "#FFF5EB",
            },
            info: {
                label: "#076DE0",
                background: "#E6F0FF",
            },
        },
    },
    typography: {
        fontFamily: familyFont,
    },
    components: {},
})
const App = () => {
    return (
        <React.StrictMode>
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles styles={{ body: theme.body }} />
                    <Main />
                </ThemeProvider>
            </AppProvider>
        </React.StrictMode>
    )
}

export default App
