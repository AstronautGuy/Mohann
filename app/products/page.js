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
            <section className="bg-white py-12 px-4 md:px-8 !pt-40">
                {/* Container with responsive 1 or 2 columns */}
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Column */}
                    <div data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            A World of Refrigeration &amp; Processing Possibilities
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed font-normal">
                            It was in 1956 that a team of highly qualified engineers came together
                            and envisioned the future needs of farmers and the food processing industry.
                            Today, with a facility spread across 10,000 sq.ft, Mohann is one of India's
                            leading post-harvest &amp; cold chain management companies.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed font-normal">
                            A subsidiary of the <strong>MOHANN GROUP OF COMPANIES</strong>, established
                            in 1960, we draw from the wisdom of 63+ years of experience and present a whole
                            new world of sustainable food processing solutions.
                        </p>
                        <div className="mt-6 p-4 border-l-4 border-blue-600 bg-blue-50 rounded-md">
                            <p className="text-gray-800">
                                We have good credentials of working with Power, Oil &amp; Gas, Dairies and
                                Pharma, Food Processing and Water Treatment Industrial Sectors.
                            </p>
                        </div>
                        <p className="mt-4 text-gray-700 leading-relaxed font-normal">
                            With over 46 years of cutting-edge technology and experience in the domain,
                            we have built a reputation for providing reliable project solutions and dedicated
                            service to a broad spectrum of clients across India and abroad as well.
                        </p>
                    </div>

                    {/* Right Column (Quote Box) */}
                    <div data-aos="fade-left" className="flex items-start md:justify-end">
                        <div className="bg-blue-100 rounded-md text-xl  h-full md:w-3/4 p-6 shadow-md border-l-4 border-blue-600">
                            <blockquote className="text-gray-700 italic">
                                “Our reputation is our most treasured asset and the foundation on
                                which we have built our company. Everyone at Mohann Engg knows that
                                the only way to protect and improve our reputation is to exceed the
                                client’s expectations, meet our commitments, innovate in our business,
                                and deliver excellence.”
                            </blockquote>
                            <p className="mt-4 text-gray-900 font-semibold text-left">
                                Mitesh Vadhiya
                            </p>
                            <p className="text-sm text-gray-600 text-left">CEO</p>
                        </div>
                    </div>
                </div>
            </section>
            <CardSlider />
            <section className="md:flex flex-row justify-center md:space-x-20 spaxe-x-0 md:space-y-0 space-y-20 mt-10 mb-10">
                <div data-aos="fade-right" data-aos-delay="250">
                    <svg width="383" height="260" viewBox="0 0 383 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 2L25 258" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 2L282 2.00195" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 258H281" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <path d="M282 2L281.5 126" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.5 134V258" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.999 133.75H381.001" stroke="#0db4b2" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="25" cy="126" r="25" fill="#be5c33"/>
                        <foreignObject x="50" y="80" width="200" height="80">
                            <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
                                <h1 className="text-2xl font-bold">Heading</h1>
                                <p className="text-lg font-normal">This is a paragraph inside the SVG.</p>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                    <svg width="383" height="260" viewBox="0 0 383 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 2L25 258" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 2L282 2.00195" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 258H281" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <path d="M282 2L281.5 126" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.5 134V258" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.999 133.75H381.001" stroke="#be5c33" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="25" cy="126" r="25" fill="#4b5da8"/>
                        <foreignObject x="50" y="80" width="200" height="80">
                            <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
                                <h1 className="text-2xl font-bold">Heading</h1>
                                <p className="text-lg font-normal">This is a paragraph inside the SVG.</p>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
                <div data-aos="fade-left" data-aos-delay="250">
                    <svg width="383" height="260" viewBox="0 0 383 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 2L25 258" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 2L282 2.00195" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <path d="M25 258H281" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <path d="M282 2L281.5 126" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.5 134V258" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <path d="M281.999 133.75H381.001" stroke="#4b5da8" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="25" cy="126" r="25" fill="#be5c33"/>
                        <foreignObject x="50" y="80" width="200" height="80">
                            <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
                                <h1 className="text-2xl font-bold">Heading</h1>
                                <p className="text-lg font-normal">This is a paragraph inside the SVG.</p>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </section>
        </>
    );
}
