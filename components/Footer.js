import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative bg-none overflow-hidden -mt-40 md:mt-0">
            {/* 1) Top Angled/Wave Section with Background SVG */}
            <div className="footerbg relative overflow-hidden h-[560px] bg-no-repeat bg-center bg-[url('/footerbg.svg')]">
                {/* Absolutely positioned text container inside the background */}
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 mt-20 md:mt-50 md:pl-20">
                    <h2 className="text-3xl font-bold text-black md:mb-0 -mb-5">ORDER NOW</h2>
                    <p className="mt-4 max-w-xl text-black">
                        You can make a request for any of our services and we aim to reply
                        within an hour (during business hours) to give you an answer about
                        the cost and timing of the project.
                    </p>
                    <button className="md:mt-6 mt-2 md:ml-0 ml-5 bg-black text-teal-600 font-semibold md:px-6 md:py-2 px-2 py-0 rounded shadow hover:bg-gray-100">
                        SUBMIT REQUEST
                    </button>
                </div>
            </div>

            {/* 2) Middle Section with Logos or Additional Info */}
            <div className="bg-white py-8 -mt-40 md:mt-0">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                    {/* Left side */}
                    <div className="mb-6 sm:mb-0">
                        {/* Replace with an actual image or logo */}
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 mt-2 bg-white"><img src="/images/logoCropped.png" alt="company Logo" /></div>
                            <h3 className="text-gray-700 font-semibold">
                                Mohann Engineers
                            </h3>
                        </div>
                        <p className="text-sm text-gray-500">
                            High-quality translations for the most demanding customers
                        </p>
                    </div>

                    {/* Right side */}
                    <div>
                        <p className="text-sm text-gray-700 mb-1">Development &amp; support</p>
                        {/* Replace with an actual image or logo */}
                        <div className="h-10 w-20 bg-gray-200" />
                    </div>
                </div>
            </div>

            {/* 3) Bottom copyright line */}
            <div className="bg-gray-100 py-4">
                <p className="text-center text-sm text-gray-500">
                    © Copyright. All materials published...
                </p>
            </div>
        </footer>
    );
};

export default Footer;