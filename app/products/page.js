"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSlider from "@/components/cardSlider";

export default function AboutSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <CardSlider />
        </>
    );
}
