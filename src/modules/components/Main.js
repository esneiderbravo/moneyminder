import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutContainer from "../containers/layout/LayoutContainer"

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

Main.propTypes = {}
