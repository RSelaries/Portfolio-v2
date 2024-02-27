import Home from "./pages/Home"
import PageTest1 from "./pages/PageTest1"
import PageTest2 from "./pages/PageTest2"
import { useState } from "react"

export default function App() {

    const [showPage, setShowPage] = useState([
        { id: "Home", isShown: true, animation: "" },
        { id: "PageTest1", isShown: false, animation: "" },
        { id: "PageTest2", isShown: false, animation: "" },
    ])

    function changePage(pageName) {
        let showPageCopy = showPage.map( x => x)
        let currentPage = showPageCopy[showPageCopy.findIndex(x => x.isShown === true)]
        let nextPage = showPageCopy[showPageCopy.findIndex(x => x.id === pageName)]

        currentPage.animation = "leave"
        nextPage.animation = "enter"
        nextPage.isShown = true
        setShowPage(showPageCopy)

        setTimeout(() => {
            setShowPage(prevShowPage => {
                const updatedShowPage = prevShowPage.map(x => ({
                    ...x,
                    isShown: x.id === pageName,
                }));
                return updatedShowPage;
            });
        }, 2000);
    }

    const handlePageChange = (pageName) => {
        changePage(pageName)
    }

    return (
        <div>
            {showPage.find(x => x.id === "Home").isShown && <Home animation={showPage[0].animation} handlePageChange={handlePageChange} /> }
            {showPage.find(x => x.id === "PageTest1").isShown && <PageTest1 animation={showPage[1].animation} handlePageChange={handlePageChange} /> }
            {showPage.find(x => x.id === "PageTest2").isShown && <PageTest2 animation={showPage[2].animation} handlePageChange={handlePageChange} /> }
        </div>
    )
}

export function PageElement({ children, animation }) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                animation: `2s ease-in-out ${animation}`,
                position: "absolute",
                top: 0,
            }}
        >
            {children}
        </div>
    )
}