import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"

// Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"

export default function App() {
    const [pageTransition, setPageTransition] = useState(false)
    const [navbar, setNavbar] = useState({
        color: "#C90707",
        animation: "6s fade-in",
    })
    const [showPage, setShowPage] = useState([
        { id: "Home", isShown: true, animation: "" },
        { id: "Contact", isShown: false, animation: "" },
    ])

    function changePage(pageName) {
        let showPageCopy = showPage.map((x) => x)
        let currentPage =
            showPageCopy[showPageCopy.findIndex((x) => x.isShown === true)]
        let nextPage =
            showPageCopy[showPageCopy.findIndex((x) => x.id === pageName)]

        currentPage.animation = "4s ease-in-out leave"
        nextPage.animation = "2s ease-in-out enter"
        console.log(
            `current page :  ${currentPage} animation : ` +
                currentPage.animation
        )
        nextPage.isShown = true
        setShowPage(showPageCopy)

        setTimeout(() => {
            setShowPage((prevShowPage) => {
                const updatedShowPage = prevShowPage.map((x) => ({
                    ...x,
                    isShown: x.id === pageName,
                }))
                return updatedShowPage
            })
            setPageTransition(false)
        }, 2000)
    }

    const handlePageChange = (pageName) => {
        changePage(pageName)
        if (pageName === "Home") {
            setPageTransition(true)
            setNavbar({ color: "#C9070700", animation: "" })
            setTimeout(() => {
                setNavbar({ color: "#C90707", animation: "3s fade-in1" })
            }, 2000)
        } else {
            setNavbar({ color: "#000", animation: "" })
        }
    }

    useEffect(() => {
        window.addEventListener('popstate', () => {
            console.log(window.location.pathname)
        })
    }, [])

    return (
        <div>
            <Navbar color={navbar.color} animation={navbar.animation} handlePageChange={handlePageChange} />
            {pageTransition && <PageTransition />}
            {showPage.find((x) => x.id === "Home").isShown && (<Home animation={showPage[0].animation} />)}
            {showPage.find((x) => x.id === "Contact").isShown && (<Contact animation={showPage[1].animation} />)}
        </div>
    )
}

function PageTransition() {
    return (
        <div
            style={{
                backgroundColor: "black",
                width: "100vw",
                animation: "2s infinite page-transition",
                position: "absolute",
                zIndex: "1000",
                bottom: 0,
                transformOrigin: "center",
            }}
        ></div>
    )
}

export function PageElement({ children, animation }) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                animation: animation,
                position: "absolute",
                top: 0,
                overflow: "hidden",
            }}
        >
            {children}
        </div>
    )
}
