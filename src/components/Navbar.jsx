import { useState } from "react"

export default function Navbar(props) {
    const { color = '#000' } = props

    function Button(props) {
        const { children, fontSize = '1.5rem' } = props
        const [btnScale, setBtnScale] = useState(1)
        return <button
            style={{
                color: color,
                border: 'none',
                backgroundColor: 'transparent',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: fontSize,
                margin: '1rem',
                padding: '0.2rem',

                cursor: 'pointer',
                transform: `scale(${btnScale})`,
            }}
            onMouseEnter={() => {setBtnScale(1.1)}}
            onMouseLeave={() => {setBtnScale(1)}}
        >
            {children}
        </button>
    }
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 10,
                top: 0,
                width: "calc(100vw - 2rem)",
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
                padding: '0 1rem',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <Button fontSize={'1.8rem'}>SELARIES</Button>
            </div>

            <div>
                <Button>Portfolio</Button>
                <Button>À Propos</Button>
                <Button>Contact</Button>
            </div>
        </div>
    )
}
