import React, { useState, useRef } from "react";

const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
];

const CardSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const startY = useRef(0);
    const deltaY = useRef(0);

    const handleMouseDown = (e) => {
        startY.current = e.clientY;
        deltaY.current = 0;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        deltaY.current = e.clientY - startY.current;
    };

    const handleMouseUp = () => {
        if (deltaY.current > 50) {
            movePrev();
        } else if (deltaY.current < -50) {
            moveNext();
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const moveNext = () => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
    };

    const movePrev = () => {
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="relative flex flex-col items-center h-[400px] w-[250px] overflow-hidden cursor-grab" onMouseDown={handleMouseDown}>
            {cards.map((card, index) => {
                const offset = (index - activeIndex + cards.length) % cards.length;
                const scale = 1 - Math.abs(offset) * 0.1;
                const translateY = offset * 50;
                const zIndex = cards.length - Math.abs(offset);
                const opacity = offset === 0 ? 1 : 0.7;

                return (
                    <div
                        key={card.id}
                        className="absolute w-[200px] h-[120px] flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-xl shadow-lg transition-all duration-300"
                        style={{
                            transform: `translateY(${translateY}px) scale(${scale})`,
                            zIndex,
                            opacity,
                        }}
                        onClick={() => setActiveIndex(index)}
                    >
                        {card.title}
                    </div>
                );
            })}
        </div>
    );
};

export default CardSlider;
