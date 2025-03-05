import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <>
        <footer className="relative overflow-hidden bg-gradient-to-b from-10% from-white to-80% to-[#1c1c1c]">
            {/* Top Section */}
            <div className="relative flex bg-no-repeat bg-center bg-cover h-[560px] bg-[url('/footerbg.svg')]">
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 md:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-20">
                        ORDER NOW
                    </h2>
                    <p className="max-w-xl text-white mb-6">
                        You can make a request for any of our services and we aim to reply
                        within an hour (during business hours) to give you an answer about
                        the cost and timing of the project.
                    </p>
                    <button className="bg-black text-white font-semibold py-3 px-6 rounded-full shadow hover:scale-105 transition-transform">
                        <a href="/contact" >SUBMIT REQUEST</a>
                    </button>
                </div>
                <div className="relative flex flex-row gap-[30px] mt-90 ml-70 hidden md:inline-flex">
                    <a
                        href="https://facebook.com/your_page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black text-[30px] no-underline transition duration-300 ease-in-out"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://twitter.com/your_page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black text-[30px] no-underline transition duration-300 ease-in-out"
                    >
                        <Twitter />
                    </a>
                    <a
                        href="https://instagram.com/your_page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black text-[30px] no-underline transition duration-300 ease-in-out"
                    >
                        <Instagram />
                    </a>
                </div>
            </div>
            <section className="overflow-x-hidden w-auto flex flex-col mt-5 bg-[#1c1c1c] text-white text-center justify-between items-center">
    <div className="w-full bg-[#1c1c1c] text-[#0db4b2] text-center pt-0 pr-[30px] pb-[30px] pl-[30px] text-[14px] flex justify-between items-center underline-offset-5 underline font-light">
        <span>&copy; Mohann Engineers 2025-2026</span>
        <span className="powered">Powered by <a href="https://devinfotech.net" target="_blank"><strong>DevInfotech</strong></a></span>
    </div>
            </section>
        </footer>
    </>
    );
};

export default Footer;
