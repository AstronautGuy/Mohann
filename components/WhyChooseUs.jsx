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
                    <h3 className="text-4xl font-semibold mb-8">World class quality is our priority</h3>
                    <p className="text-gray-700 mb-6 font-normal">
                        At Mohann Engineers, our primary focus is on providing top-tier Quality and Energy-Saving
                        solutions. We understand the importance of both performance and efficiency in today’s
                        fast-paced industrial landscape. Over the years, we have built a reputation for delivering
                        state-of-the-art equipment and processing lines that are not only reliable but also optimized
                        to reduce energy consumption, helping our customers achieve sustainable growth while
                        minimizing their environmental footprint.
                    </p>

                    {/* Bullet Points with Icons */}
                    <ul className="space-y-4">
                        <li data-aos="fade-up" data-aos-delay="100" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Contribute to your success.</h4>
                                <p className="text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Build a long term reliable business Partnership</h4>
                                <p className="text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Build quality for future</h4>
                                <p className="text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400" className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold">Succeed Together</h4>
                                <p className="text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
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

            {/* FULL-WIDTH PARAGRAPH BELOW BOTH SECTIONS */}
            <div data-aos="fade-up" className="max-w-7xl mx-auto mt-8 px-4 md:px-0 text-justify">
                <p className="text-gray-700 font-normal">
                    Thanks to the high level of satisfaction that our esteemed customers have experienced
                    from using our advanced systems, we have evolved into a globally preferred supplier of
                    processing equipment and complete processing lines. Our commitment to reliable quality
                    standards is unwavering, and we ensure that every solution we offer is backed by rigorous
                    testing and quality assurance processes.
                </p>
                <p className="text-gray-700 mt-4 font-normal">
                    One of our core principles at Mohann Engineers is the belief in truly understanding our
                    customers' specific needs. We don’t simply provide off-the-shelf solutions; instead, we
                    tailor our systems to precisely match the requirements of each customer, ensuring that they
                    receive a customized solution that brings maximum value. Once we design and develop the
                    perfect system, we stay involved, working closely with our clients until their staff is
                    fully trained and proficient in the operation of the system. We ensure a smooth transition
                    to daily use, providing ongoing support to guarantee long-term success and operational
                    efficiency.
                </p>
                <p className="text-gray-700 mt-4 font-normal">
                    By combining innovation, engineering excellence, and a customer-centric approach,
                    Neologic Engineers has earned its place as a trusted partner in industries worldwide.
                    Our dedication to continuous improvement and the application of the best available
                    components in every system we design ensures that we remain at the forefront of the
                    processing equipment industry, providing solutions that are not only effective but also
                    sustainable for the future.
                </p>
            </div>
        </section>
    );
}
