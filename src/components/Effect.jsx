import React, { useState, useEffect } from "react";

export default function Effect() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize); // consider a clean up part
        };
    }, []);
    return <div>{windowWidth}</div>;
}
