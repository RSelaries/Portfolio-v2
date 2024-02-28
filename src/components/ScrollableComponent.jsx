import { useRef, useEffect } from "react"
import { OverlayScrollbars } from "overlayscrollbars"

export default function ScrollableComponent({ children, animation }) {
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        // Initialize OverlayScrollbars when the component mounts
        const scrollbarInstance = OverlayScrollbars(
            scrollContainerRef.current,
            {
                className: "os-theme-light",
                sizeAutoCapable: true,
                paddingAbsolute: true,
                overflowBehavior: {
                    x: "scroll",
                    y: "auto",
                },
                scrollbars: {
                    visibility: "auto",
                    autoHideDelay: 800,
                },
            }
        )

        return () => {
            scrollbarInstance.destroy()
        }
    })

    return (
        <div    
            ref={scrollContainerRef}
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: "0",
                animation: animation
                // border: "5px solid #ccc",
            }}
        >
            {children}
        </div>
    )
}
