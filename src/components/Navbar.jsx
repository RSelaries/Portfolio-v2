import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const { color = "#000" } = props

    function StyledLink(props) {
        const {
            children,
            href = "/Portfolio-v2",
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

                        cursor: "pointer",
                        transform: `scale(${btnScale})`,
                    }}
                    onMouseEnter={() => setBtnScale(1.1)}
                    onMouseLeave={() => setBtnScale(1)}
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

            <div style={{ display:'flex', flexDirection: 'row' }}>
                <StyledLink href={"/Portfolio-v2/perruche"}>Perruichz</StyledLink>
                <StyledLink href={"/Portfolio-v2/A-Propos"}>À Propos</StyledLink>
                <StyledLink href={"/Portfolio-v2/Contact"}>Contact</StyledLink>
            </div>
        </div>
    )
}
