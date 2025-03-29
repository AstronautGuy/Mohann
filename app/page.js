import React from "react";
import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoScroller from "@/components/LogoScroller";
import Image from "next/image";
import Products1 from "@/components/Products1";
import CeoQuote from "@/components/CeoQuote";

export default function Home() {
    return (
        <main className="!pt-37">
            <HeroSlider/>
            <WhyChooseUs/>
            <Products1/>
            <div className="flex items-center">
                <Image data-aos="fade-right"
                       data-aos-duration="2000"
                       data-aos-easing="ease-in-out"
                       className="ml-10 p-10 z-20"
                       alt="CEO"
                       src="/images/ceo.png" width={500} height={100}/>
                <div data-aos="fade-left" data-aos-duration="2000" className="p-10 -ml-80 z-10 mr-30 bg-white h-48">
                    <CeoQuote/>
                </div>
            </div>
            <div className="hidden md:block">
                <LogoScroller/>
            </div>
        </main>
    );
}
