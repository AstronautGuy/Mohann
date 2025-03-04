import React from 'react';

const items = [
    {
        title: 'MISSION',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.',
        icon: '🎯', // You can swap this out for an <img> or an SVG
        color: '#F9A61A' // orange
    },
    {
        title: 'VISION',
        text: 'Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.',
        icon: '💡',
        color: '#4BB9D0' // teal
    },
    {
        title: 'VALUES',
        text: 'Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.',
        icon: '⚖️',
        color: '#F9C81D' // yellow
    }
];

export default function MissionVisionValues() {
    return (
        <div className="bg-gray-50 h-96 flex items-center justify-center p-8">
            <div className="flex flex-col md:flex-row gap-10">
                {items.map((item, index) => (
                    <div key={index} className="text-center w-64">
                        {/* Circle wrapper (relative) so we can center an icon inside */}
                        <div className="relative w-[200px] h-[200px] mx-auto">
                            <svg width="183" height="192" viewBox="0 0 183 192" fill={item.color} xmlns="http://www.w3.org/2000/svg">
                                <path d="M182.497 95.5001H168.997C159.5 -12.5 24 -7 7.99736 85.5001C7.99736 85.5001 13 14.5 88.4974 11.0001V1.00006C146.497 5.07823 182.497 46 182.497 95.5001Z" stroke="none"/>
                                <path d="M1 96H14.5C23.9975 204 159.497 198.5 175.5 106C175.5 106 170.497 177 95.0001 180.5V190.5C37.0001 186.422 1.00009 145.5 1 96Z" stroke="none"/>
                            </svg>
                            {/* Icon in the absolute center */}
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <span className="text-3xl">{item.icon}</span>
                            </div>
                        </div>

                        {/* Title and text */}
                        <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
