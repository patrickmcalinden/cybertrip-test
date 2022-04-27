import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function scrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.screenTop(0,0)
    }, [pathaname]);

    return null
}