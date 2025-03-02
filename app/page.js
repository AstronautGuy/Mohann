import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoScroller from '../components/LogoScroller';

export default function Home() {
    return (
        <main className="!pt-37">
            <HeroSlider />
            <WhyChooseUs />
            <LogoScroller />
        </main>
    );
}
