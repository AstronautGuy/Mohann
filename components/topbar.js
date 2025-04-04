import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Topbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-10 bg-[#0db4b2] text-black pl-8 pr-8 shadow-md z-50">
            <div className="max-w-8xl mx-auto flex flex-wrap justify-between items-center py-1 w-full">
                <p className="hidden md:block text-sm lg:text-xl italic font-normal">
                    Celebrating 25 Years of Excellence
                </p>
                <ul className="flex w-full md:w-auto justify-between md:justify-start text-xs sm:text-sm whitespace-nowrap gap-2 font-normal">
                    <li className="flex items-center gap-1">
                        <div className="bg-amber-700 rounded-full p-1.5">
                        <Mail size={16} color="white" />
                        </div>
                        sales@mohann.com
                    </li>
                    <li className="flex items-center gap-1">
                        <div className="bg-amber-700 rounded-full p-1.5">
                        <Phone size={16} color="white" />
                        </div>
                        +91-875812 4554
                    </li>
                    <li className="flex items-center gap-1">
                        <div className="bg-amber-700 rounded-full p-1.5">
                        <MessageCircle size={16} color="white" />
                        </div>
                        +91-875812 4554
                    </li>
                </ul>
            </div>
        </nav>
    );
}

