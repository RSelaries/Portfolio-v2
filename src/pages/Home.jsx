// Elements and Modules
import { PageElement } from "../App"
import { useState } from "react"

// Assets
import background from "../assets/images/background-image.webp"
import cassandre from "../assets/images/DSC_09z89.png"
import Navbar from "../components/Navbar"

export default function Home({ handlePageChange, animation }) {
    const [imageScroll, setImageScroll] = useState("translateY(0px)")
    const imgScrollHeight =
        "calc(calc(calc(calc(100vw * 3.5) - 100vh) * -1) + 1px)"
    const homeAnimationDuration = 3000 // In Miliseconds

    return (
        <PageElement animation={animation}>
            <div
                style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            >
                <img
                    className="image"
                    src={background}
                    style={{
                        width: "100vw",
                        transform: imageScroll,
                        transition: `transform ${
                            homeAnimationDuration * 0.001
                        }s cubic-bezier(.9,0,.5,1) 0.5s`,
                    }}
                    alt=""
                    onLoad={() => {
                        setImageScroll(`translateY(${imgScrollHeight})`)
                    }}
                />
                <HomeUi />
                <HomeTitleAndNavbar />
            </div>
        </PageElement>
    )
}

function HomeUi() {
    return (
        <div>
            <div
                style={{
                    width: "100vw",
                    position: "absolute",
                    bottom: "calc(100vw * 0.17)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <img
                    src={cassandre}
                    style={{
                        width: "calc(100vw * 0.165)",
                        animation: `3s infinite shaking ease-in-out`,
                        zIndex: 2,
                    }}
                    alt=""
                />
            </div>
        </div>
    )
}

function HomeTitleAndNavbar() {
    const titleColor = "#C90707"

    return (
        <div
            style={{
                position: "absolute",
                top: "0",
                width: "100vw",
                height: "100vh",
                opacity: 1,
                color: titleColor,
                animation: "6s fade-in",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "0",

                    "--font-size": "12vw",
                }}
            >
                <h1>
                    <div
                        style={{
                            zIndex: 1,
                            fontSize: "var(--font-size)",
                            fontFamily: "Poppins",
                            fontWeight: "900",
                            letterSpacing: "-0.9vw",
                            mixBlendMode: "multiply",
                            lineHeight: "80%",
                            textAlign: "center",
                            position: "relative",
                            transform:
                                "translateY( calc(var(--font-size) * -0.5) )",
                        }}
                    >
                        SELARIES
                    </div>
                </h1>
                <div
                    style={{
                        zIndex: 3,
                        letterSpacing: "-0.9vw",
                        mixBlendMode: "multiply",
                        fontSize: "var(--font-size)",
                        fontFamily: "Poppins",
                        fontWeight: "900",
                        position: "absolute",
                        textAlign: "center",
                        transform:
                            "translateY( calc(var(--font-size) * 0.25) )",
                        transition: `opacity 2s ease-in-out`,
                    }}
                >
                    RAPHAEL
                </div>
            </div>

            <Navbar color={titleColor} className={"fade-in"} />
        </div>
    )
}
