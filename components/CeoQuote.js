"use client";
import TypewriterText from "./TypewriterText";
import { Quote } from "lucide-react";

export default function CeoQuote() {
    const segments = [
        {
            text: "Our reputation is our most treasured asset and the foundation on which we have built our company. Everyone at ",
            bold: false,
        },
        { text: "Mohann Engg", bold: true },
        {
            text: " knows that the only way to protect and improve our reputation is to exceed the client’s expectations, meet our commitments, innovate in our business, and deliver excellence.",
            bold: false,
        },
    ];

    return (
        <blockquote className="italic !font-light -mt-20 ml-40 text-black text-xl">
            <Quote className="scale-x-[-1]" size={50} />
            <TypewriterText segments={segments} speed={50} initialDelay={0} />
            <Quote className="inline-block ml-2" size={50} />
        </blockquote>
    );
}