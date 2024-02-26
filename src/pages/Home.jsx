import background from "../assets/images/background-image.webp"
import cassandre from "../assets/images/DSC_09z89.png"
import Navbar from "../components/Navbar"
// import "./Home.css"
import { useEffect, useState } from "react"

export default function Home() {
    return (
        <div>
            <BackgroundImage />
        </div>
    )
}

function BackgroundImage() {
    const [imageScroll, setImageScroll] = useState("translateY(0px)")
    const imgScrollHeight =
        "calc(calc(calc(calc(100vw * 3.5) - 100vh) * -1) + 1px)"
    const homeAnimationDuration = 3000 // In Miliseconds

    return (
        <div
            style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            onClick={() => console.log("gros-zizi")}
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
                        mixBlendMode: "",
                    }}
                    alt=""
                />
            </div>
        </div>
    )
}

function HomeTitleAndNavbar() {
    const titleColor = "#C90707"
    useEffect(() => {
        const HomeTitleAndNavabrCss = `
            .fade_in {
                position: fixed;
                top: 0;
                width: 100vw;
                height: 100vh;
    
                animation: 6s fade-in;
                background-color: aqua;
            }
    
            @keyframes fade-in {
                0% {color: #C9070700;}
                50% {color: #C9070700;}
                100% {color: #C90707;}
            }
            
        `
    
        const style = document.createElement("style")
        style.innerHTML = HomeTitleAndNavabrCss
    
        document.head.append(style)
    }, [])

    return (
        <div
            className="fade-in"
            style={{ 
                position: "absolute",
                top: "0",
                width: "100vw",
                height: "100vh",
                opacity: 1, 
                color: titleColor,
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

            <Navbar color={titleColor} />
        </div>
    )
}
