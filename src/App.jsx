import { Routes, Route, useLocation } from "react-router-dom"
import Perrine from "./pages/Perrine"
import Home from "./pages/Home"

export default function App() {
    const location = useLocation()

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/perruche" element={<Perrine />} />
            </Routes>
        </>
    )
}
