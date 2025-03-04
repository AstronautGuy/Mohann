import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoScroller from "@/components/LogoScroller";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="!pt-37">
            <HeroSlider />
            <WhyChooseUs />
            <div className="hidden md:block">
            <LogoScroller />
            </div>
        </main>
    );
}
