import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutContainer from "../containers/LayoutContainer"

export default function Main({ props }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer props />} />
            </Routes>
        </BrowserRouter>
    )
}
