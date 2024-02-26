import perrine from "../assets/images/DSC0220.jpg"
import { Link } from "react-router-dom"

export default function Perrine() {
    return (
            <div
                style={{
                    backgroundImage: `url(${perrine})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "100vh",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "4.5rem",
                }}
            >
                <h1>PERRINE DE RAM</h1>
                <Link to={"../"}>Home</Link>
                <h1>BOTTOM TEXT</h1>
            </div>
    )
}
