import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const { color, animation = "", handlePageChange } = props

    function StyledLink(props) {
        const {
            children,
            href = "/Portfolio-v2",
            toPage = "Home",
            fontSize = "1.5rem",
            fontWeight = 600,
        } = props
        const [btnScale, setBtnScale] = useState(1)

        return (
            <div
                style={{
                    padding: "1rem",
                }}
            >
                <Link
                    to={href}
                    style={{
                        color: color,
                        border: "none",
                        backgroundColor: "transparent",
                        fontFamily: "Poppins",
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        padding: "0.2rem",
                        textDecoration: "none",
                        animation: animation,
                        transition: "color 2s",

                        cursor: "pointer",
                        transform: `scale(${btnScale})`,
                    }}
                    onMouseEnter={() => setBtnScale(1.1)}
                    onMouseLeave={() => setBtnScale(1)}
                    onClick={() => handlePageChange(toPage)}
                >
                    {children}
                </Link>
            </div>
        )
    }

    return (
        <div
            style={{
                position: "fixed",
                zIndex: 10,
                top: 0,
                width: "calc(100vw - 2rem)",
                height: "fit-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0 1rem",
                justifyContent: "space-between",
            }}
        >
            <div>
                <StyledLink fontSize={"1.8rem"} fontWeight={900}>
                    SELARIES
                </StyledLink>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <StyledLink href={"/Portfolio-v2/Portfolio"} toPage={"Portfolio"}>
                    Portfolio
                </StyledLink>
                <StyledLink href={"/Portfolio-v2/A-Propos"} toPage={"APropos"}>
                    À Propos
                </StyledLink>
                <StyledLink href={"/Portfolio-v2/Contact"} toPage={"Contact"}>
                    Contact
                </StyledLink>
            </div>
        </div>
    )
}
