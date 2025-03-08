"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Quote } from "lucide-react";


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
                    <h2 className="text-2xl md:text-4xl font-bold text-black">
                        A World of Refrigeration &amp; Processing Possibilities
                    </h2>
                    <p className="mt-4 text-gray-500 leading-relaxed font-normal text-justify">
                        Our company has consistently met the evolving needs of clients by leveraging extensive expertise and years of experience to provide highly customized, effective, and scalable solutions. Through strategic partnerships with international technology leaders, we integrate world-class technologies into our operations, staying ahead of industry trends. This has solidified our position as a leader in the dairy beverage processing machinery sector, known for innovation and excellence.</p>
                    <p className="mt-4 text-gray-500 leading-relaxed font-normal">
                        A subsidiary of the <strong>MOHANN GROUP OF COMPANIES</strong>, established in 1960, we draw from the wisdom of 63+ years of experience and present a whole new world of sustainable food processing solutions.
                    </p>
                    <div className="mt-6 p-4 border-l-4 border-blue-600 bg-blue-50 rounded-md font-normal text-justify">
                        <p className="text-gray-700">
                            As market and technology evolve, our solutions have continuously improved, streamlining production processes to enhance efficiency, performance, and scalability. We focus on innovation to optimize the entire production cycle, ensuring cost-effective and reliable systems that keep clients ahead of the competition.
                        </p>
                    </div>
                    <p className="mt-4 text-gray-500 leading-relaxed font-normal text-justify">
                        Our commitment to quality and client satisfaction is demonstrated by the successful completion of projects worldwide, where we consistently exceed client expectations. With decades of experience, we provide high-quality, future-proof solutions that foster business growth, enhance operational efficiency, and support long-term success, ensuring clients thrive in a changing marketplace.
                    </p>
                </div>

                {/* Right Column (Quote Box) */}
                <div data-aos="fade-left" className="flex items-start md:justify-end">
                    <div className="relative w-full h-full flex justify-center items-center">
                        {/* Smaller Blue Box (Peeking from Left, Right & Top) */}
                        <div className="absolute top-30 left-6 right-6 bg-[#4b5da8] h-[65%]"></div>

                        {/* Larger Rust Box */}
                        <div className="relative bg-[#be5c33] text-xl p-8 shadow-md text-white w-4/5 min-h-3/4 flex flex-col justify-center">
                            <blockquote className="italic">
                                <Quote className="scale-x-[-1] opacity-40" size={50} />
                                Our reputation is our most treasured asset and the foundation on which we have built our company. Everyone at <b>Mohann Engg</b> knows that the only way to protect and improve our reputation is to exceed the client’s expectations, meet our commitments, innovate in our business, and deliver excellence.
                                <Quote className="inline-block ml-2" />
                            </blockquote>
                            <p className="mt-4 font-semibold text-left">Mitesh Vadhiya</p>
                            <p className="text-sm text-left">CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="flex flex-col md:flex-row min-h-[40rem] p-12 bg-gray-100 gap-12">
                {/* Mission Statement */}
                <div data-aos="zoom-in" className="flex-1 bg-teal-500 text-white p-6 flex flex-col items-start text-justify">
                    <div className="w-12 h-12 bg-white p-2 rounded-full mb-4">{/* Replace with your SVG */}</div>
                    <h2 className="text-2xl font-bold">Mission Statement</h2>
                    <p className="mt-4 text-lg font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="mt-6 space-y-2 text-lg font-normal">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-6 h-6 text-white mt-1" />
                            <span>This text is fully editable.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-200 pt-2">
                            <CheckCircle className="w-6 h-6 text-white  mt-1" />
                            <span>This is a sample text.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-200 pt-2">
                            <CheckCircle className="w-6 h-6 text-white mt-1" />
                            <span>It can be replaced with your own style.</span>
                        </li>
                    </ul>
                </div>

                {/* Vision Statement */}
                <div data-aos="zoom-in" className="flex-1 bg-white shadow-md p-6 flex flex-col items-start text-justify">
                    <div className="w-12 h-12 bg-gray-300 p-2 rounded-full mb-4">{/* Replace with your SVG */}</div>
                    <h2 className="text-2xl font-bold">Vision Statement</h2>
                    <p className="mt-4 text-lg font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="mt-6 space-y-2 text-lg font-normal">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-6 h-6 text-black mt-1" />
                            <span>This text is fully editable.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-400 pt-2">
                            <CheckCircle className="w-6 h-6 text-black mt-1" />
                            <span>This is a sample text.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-400 pt-2">
                            <CheckCircle className="w-6 h-6 text-black mt-1" />
                            <span>It can be replaced with your own style.</span>
                        </li>
                    </ul>
                </div>

                {/* Values Statement */}
                <div data-aos="zoom-in" className="flex-1 bg-[#4b5da8] text-white p-6 flex flex-col items-start text-justify">
                    <div className="w-12 h-12 bg-white p-2 rounded-full mb-4">{/* Replace with your SVG */}</div>
                    <h2 className="text-2xl font-bold">Values Statement</h2>
                    <p className="mt-4 text-lg font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="mt-6 space-y-2 text-lg font-normal">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-6 h-6 text-white mt-1" />
                            <span>This text is fully editable.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-400 pt-2">
                            <CheckCircle className="w-6 h-6 text-white mt-1" />
                            <span>This is a sample text.</span>
                        </li>
                        <li className="flex items-start gap-2 border-t border-dotted border-gray-400 pt-2">
                            <CheckCircle className="w-6 h-6 text-white mt-1" />
                            <span>It can be replaced with your own style.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section data-aos="flip-left" data-aos-duration="3000" className="relative bg-cover bg-center text-black px-6 py-12 md:py-16">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url('/images/aboutBg.jpg')` }}
                ></div>

                {/* Rust Overlay */}
                <div className="absolute inset-0 bg-[#8B4513] opacity-25"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto text-black">
                    <h1 data-aos="fade-right" data-aos-duration="3000" className="leading-relaxed text-lg md:text-xl text-justify">
                        <span className="font-semibold text-xl md:text-3xl block">Creating Client Partnerships</span>
                        <span className="font-bold text-2xl md:text-4xl block mt-2 mb-4">
                A Collaborative Approach to Success
            </span>
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="3000" className="leading-relaxed text-lg md:text-xl text-justify font-normal    ">
                        Our business is built on the belief that strong client partnerships are key to success. We work closely with
                        clients, becoming an extension of their team and offering expertise that drives mutual growth. By fostering
                        relationships based on trust and respect, we help clients achieve their goals, and in turn, our success follows.
                        Our focus is on long-term collaboration that delivers valuable solutions and supports sustainable growth for both
                        parties.
                    </p>
                    <p data-aos="fade-right" data-aos-duration="3000" className="leading-relaxed text-lg md:text-xl text-justify mt-6 font-normal">
                        We serve a diverse range of clients across industries like manufacturing, packaging, food and beverage, and
                        pharmaceuticals, including small businesses, mid-sized enterprises, and large corporations. By delivering tailored
                        solutions and exceptional service, we ensure our clients' unique needs are met. Our support spans from initial
                        consultation to implementation and beyond, optimizing processes and enhancing efficiency. With a commitment to
                        excellence, we have built a reputation as a trusted partner in driving long-term growth and success for businesses
                        of all sizes.
                    </p>
                </div>
            </section>
        </>
    );
}
