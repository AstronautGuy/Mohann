import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            {/*
        1) Top Section with Polygon Background
           + Subtle Overlay for Better Text Contrast
      */}
            <div className="relative bg-no-repeat border-b-1 bg-center h-[560px] bg-[url('/footerbg.svg')]">
                {/*
          Subtle overlay to darken the background slightly
          so text stands out more (change opacity to taste).
        */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text container, placed above overlay */}
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 md:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-20">
                        ORDER NOW
                    </h2>
                    <p className="max-w-xl text-white mb-6">
                        You can make a request for any of our services and we aim to reply
                        within an hour (during business hours) to give you an answer about
                        the cost and timing of the project.
                    </p>
                    <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:scale-105 transition-transform">
                        SUBMIT REQUEST
                    </button>
                </div>
            </div>

            {/*
        2) Middle Section with Logo & Additional Info
           Removed negative margins and fixed heights
           so the layout flows naturally.
      */}
            <div className="bg-black/40 py-8 shadow-md">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                    {/* Left side: Logo & Tagline */}
                    <div className="mb-6 sm:mb-0 flex flex-col mt-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-20 w-20 relative">
                                {/* Next/Image usage (replace with <img> if you prefer) */}
                                <Image
                                    src="/images/logoCropped.png"
                                    alt="Company Logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-gray-700 text-2xl font-semibold">
                                    Mohann Engineers
                                </h3>
                                <p className="text-sm text-gray-500">
                                    High-quality translations for the most demanding customers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Development & Support + Placeholder Logo */}
                    <div className="text-center sm:text-right">
                        <p className="text-sm text-gray-700 mb-1">Development &amp; support</p>
                        <div className="h-10 w-20 bg-gray-200 mx-auto sm:mx-0" />
                    </div>
                </div>
            </div>

            {/*
        3) Bottom Section
      */}
            <div className="bg-[#2b6262] py-4">
                <p className="text-center text-sm text-white">
                    © Copyright. All materials published...
                </p>
            </div>
        </footer>
    );
};

export default Footer;
