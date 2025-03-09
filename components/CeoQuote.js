"use client";
import { useState } from "react";
import TypewriterText from "./TypewriterText";
import { Quote } from "lucide-react";

export default function CeoQuote() {
    const [quoteFinished, setQuoteFinished] = useState(false);

    const segments1 = [
        { text: "Our reputation is our most treasured asset and the foundation on which we have built our company. Everyone at ", bold: false },
        { text: "Mohann Engg", bold: true },
        { text: " knows that the only way to protect and improve our reputation is to exceed the client’s expectations, meet our commitments, innovate in our business, and deliver excellence.", bold: false },
    ];
    const segments2 = [{ text: "Mitesh Vadhiya", bold: true }];
    const segments3 = [{ text: "CEO", bold: true }];

    return (
        <blockquote className="italic !font-light -mt-20 ml-40 text-black text-xl">
            <Quote className="scale-x-[-1]" size={50} />
            <TypewriterText
                segments={segments1}
                speed={30}
                initialDelay={0}
                className="inline"
                onComplete={() => setQuoteFinished(true)} // Triggers when quote finishes
            />
            <Quote className="inline-block ml-2" size={50} />

            {/* Name and Title appear only after the quote finishes */}
            {quoteFinished && (
                <div className="mt-4">
                    <TypewriterText segments={segments2} speed={30} initialDelay={500} />
                    <br />
                    <TypewriterText segments={segments3} speed={30} initialDelay={500} />
                </div>
            )}
        </blockquote>
    );
}
