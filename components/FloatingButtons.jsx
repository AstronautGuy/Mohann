"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function FloatingButtons({ phoneNumber = "919876543210" }) {
    const [showTopButton, setShowTopButton] = useState(false);
    const defaultMessage = "Heyy, I need your assistance!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    useEffect(() => {
        const handleScroll = () => setShowTopButton(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
            {/* WhatsApp Button */}
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
                style={{ width: "60px", height: "60px" }}
            >
                <i className="fab fa-whatsapp text-3xl"></i> {/* Font Awesome WhatsApp Icon */}
            </Link>

            {/* Back to Top Button */}
            {showTopButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-gray-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition duration-300"
                    style={{ width: "60px", height: "60px" }}
                >
                    <ArrowUp size={32} />
                </button>
            )}
        </div>
    );
}
