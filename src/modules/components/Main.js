import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutContainer from "../containers/LayoutContainer"

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Main />)
