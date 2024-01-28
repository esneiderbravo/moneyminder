import "./App.css"
import { createTheme, ThemeProvider } from "@mui/material"
import Main from "./modules/components/Main"

const familyFont = ["Poppins", "Maven Pro"].join(",")
const theme = createTheme({
    body: {
        width: "200%",
        margin: 0,
        overflowX: "hidden",
        backgroundColor: "#fafaff",
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
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    )
}

export default App
