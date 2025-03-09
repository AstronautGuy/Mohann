"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

const slides = [
    {
        src: "/images/slides/slide1.jpeg",
        heading: "COLLECTION TANK",
        caption: "Your Caption for Slide 1",
        link: "/about",
    },
    {
        src: "/images/slides/slide2.jpeg",
        heading: "Your Caption for Slide 2",
        caption: "Your Caption for Slide 2",
        link: "",
    },
    {
        src: "/images/slides/slide3.jpeg",
        heading: "Your Caption for Slide 3",
        caption: "Your Caption for Slide 3",
        link: "",
    },
];

export default function HeroSlider() {
    return (
        <div className="hero-slider w-full h-[400px] md:h-[600px] relative -mt-2">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full !m-0 !p-0"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            {/* Transparent overlay */}
                            <div className="absolute inset-0 z-10 pointer-events-none bg-black/50"></div>
                            {/* Heading Text */}
                            <div className="absolute bottom-25 left-25 z-20 text-white text-3xl font-semibold">
                                {slide.heading}
                            </div>
                            {/* Caption Text */}
                            <div className="absolute bottom-17 left-25 z-20 text-white text-xl font-semibold">
                                {slide.caption}
                            </div>
                            {/* Button */}
                            <div className="absolute bottom-5 left-25 z-20 text-black bg-teal-400 p-1 pl-2 pr-2 rounded-md text-xl font-semibold">
                                <Link href={slide.link}>Explore More !</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                /* Scoped CSS for hero slider arrows */
                .hero-slider :global(.swiper-button-next),
                .hero-slider :global(.swiper-button-prev) {
                    font-size: 28px; /* Adjust icon size */
                    width: 50px;
                    height: 50px;
                    background-color: #ffffff; /* Background color */
                    color: black; /* Arrow color */
                    border-radius: 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.3s ease-in-out;
                }

                .hero-slider :global(.swiper-button-next:hover),
                .hero-slider :global(.swiper-button-prev:hover) {
                    background-color: white;
                    color: #ffffff;
                }

                .hero-slider :global(.swiper-button-next::after),
                .hero-slider :global(.swiper-button-prev::after) {
                    font-size: 24px !important;
                    font-weight: bold;
                }

                .hero-slider :global(.swiper-pagination-bullet) {
                    width: 12px;
                    height: 12px;
                    background-color: black;
                    opacity: 0.7;
                    transition: all 0.3s ease-in-out;
                }

                .hero-slider :global(.swiper-pagination-bullet-active) {
                    background-color: #ffffff !important;
                    opacity: 1;
                    width: 14px;
                    height: 14px;
                }
            `}</style>
        </div>
    );
}
