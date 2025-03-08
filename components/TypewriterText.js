"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function TypewriterText({
                                           segments = [], // segments should be an array of objects like { text: "string", bold: true/false }
                                           speed = 50,
                                           initialDelay = 0,
                                           className = "",
                                       }) {
    // Calculate the total number of characters across all segments
    const totalLength = segments.reduce(
        (sum, segment) => sum + (segment.text ? segment.text.length : 0),
        0
    );
    const [currentCharCount, setCurrentCharCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        let timer;
        // Only continue if the element is in view and we haven't typed all characters yet
        if (isInView && currentCharCount < totalLength) {
            // If at the very start, wait for the initialDelay
            if (currentCharCount === 0 && initialDelay > 0) {
                timer = setTimeout(() => {
                    setCurrentCharCount(1);
                }, initialDelay);
            } else {
                timer = setTimeout(() => {
                    setCurrentCharCount(currentCharCount + 1);
                }, speed);
            }
        }
        return () => clearTimeout(timer);
    }, [isInView, currentCharCount, totalLength, speed, initialDelay]);

    // Render the segments based on currentCharCount
    let remaining = currentCharCount;
    const renderedSegments = segments.map((segment, index) => {
        const segLength = segment.text ? segment.text.length : 0;
        let textToShow = "";
        if (remaining > 0) {
            if (remaining >= segLength) {
                textToShow = segment.text;
            } else {
                textToShow = segment.text.substring(0, remaining);
            }
            remaining = Math.max(0, remaining - segLength);
        }
        return (
            <span key={index} className={segment.bold ? "font-bold" : ""}>
        {textToShow}
      </span>
        );
    });

    return (
        <span ref={ref} className={className}>
      {renderedSegments}
            {/* Only show blinking cursor if text is still typing and component is in view */}
            {currentCharCount < totalLength && isInView && (
                <span className="border-r-2 border-black animate-blink ml-1"></span>
            )}
    </span>
    );
}
