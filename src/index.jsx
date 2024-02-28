import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "../node_modules/overlayscrollbars/styles/overlayscrollbars.css"
// import 'overlayscrollbars/styles/overlayscrollbars.css'
import App from "./App.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="Portfolio-v2/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
