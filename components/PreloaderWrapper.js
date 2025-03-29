"use client";
import { useState, useEffect } from "react";
import Preloader from "./Preloader"; // Adjust the path if needed

export default function PreloaderWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 300000); // Simulate a delay for testing
    }, []);

    return loading ? <Preloader onComplete={() => setLoading(false)} /> : children;
}
