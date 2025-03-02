"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const logos = [
    { src: "/images/logo1.jpeg", alt: "Logo 1" },
    { src: "/images/logo2.jpeg", alt: "Logo 2" },
    { src: "/images/logo3.jpeg", alt: "Logo 3" },
    { src: "/images/logo4.jpeg", alt: "Logo 4" },
    // Add more logos as needed
];

// Duplicate the logos array so the loop appears seamless
const duplicatedLogos = [...logos, ...logos];

export default function InfiniteLogoSlider() {
    return (
        <div className="logo-slider w-full h-[200px] relative overflow-hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView={7}
                loop={true}
                speed={1000} // Transition duration in ms (adjust for faster/slower scroll)
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false} // Prevent manual interference
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {duplicatedLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center">
                        <div className="relative w-[150px] h-[100px]">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
