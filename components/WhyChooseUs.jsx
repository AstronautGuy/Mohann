"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 800,     // Animation duration in ms
            offset: 100,       // Offset (in px) from the original trigger point
            easing: "ease-in", // Easing function
            once: true,        // Whether animation should happen only once
        });
    }, []);

    return (
        <section className="bg-white px-4 py-8 md:py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* LEFT COLUMN: Text & Bullet Points */}
                <div data-aos="fade-right">
                    <h2 className="text-sm font-bold mb-0 uppercase">
                        <span className="text-black">Why</span>{" "}
                        <span className="text-red-500">Choose</span>{" "}
                        <span className="text-black">Us</span>
                    </h2>
                    <h3 className="text-4xl font-semibold mb-12">World class quality is our priority</h3>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    {/* Bullet Points with Icons */}
                    <ul className="space-y-4">
                        <li data-aos="fade-up" data-aos-delay="100" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Extended Equipment Lifespan</h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">High Performance</h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Reliable & Durable</h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Customer Satisfaction</h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* RIGHT COLUMN: Two Vertical Images Side by Side */}
                <div data-aos="fade-left" className="hidden md:flex justify-center md:justify-end gap-4">
                    <Image
                        src="/images/vertical1.jpeg"
                        alt="Vertical Image 1"
                        width={300}
                        height={450}
                        className="object-cover rounded-md grayscale-75"
                    />
                    <Image
                        src="/images/vertical2.jpg"
                        alt="Vertical Image 2"
                        width={300}
                        height={450}
                        className="object-cover rounded-md grayscale-75"
                    />
                </div>

            </div>
        </section>
    );
}
