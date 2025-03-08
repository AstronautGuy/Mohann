import ContactSection from "@/components/ContactSection";
import React from "react";
import {Phone, MessagesSquare} from "lucide-react";

export default function Home() {
    return (
        <main className="!pt-35">
            <div className="bg-white">
                {/* Banner Section */}
                <section
                    className="relative h-[400px] bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/contactBanner.jpg')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#2a3568]/20"></div>
                    {/* Banner Content */}
                    <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                        <div className="text-white max-w-3xl">
                            <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
                            <p className="text-lg">
                                Want to get in touch? We’d love to hear from you. Here’s how you can reach us…
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cards overlapping the banner */}
                <div className="relative -mt-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
                            {/* Card 1 */}
                            <div className="flex-1 bg-white shadow-lg p-6 text-center">
                                <div className="flex justify-center mb-3">
                                    <Phone className="fill-[#0db4b2] w-20 h-20" />
                                </div>
                                <h2 className="text-2xl font-semibold mb-3">Talk to Sales</h2>
                                <p className="text-gray-700 mb-4 font-normal">
                                    Interested in our products or services? Just pick up the phone to chat with a member of our sales team.
                                </p>
                                <p className="font-light mb-2 text-[#0db4b2]">+1 877 929 0687</p>
                                <p className="font-light mb-2 text-[#0db4b2]">+1 877 929 0687</p>
                                <p className="font-light mb-2 text-[#0db4b2]">+1 877 929 0687</p>
                                <p className="font-light mb-2 text-[#0db4b2]">+1 877 929 0687</p>
                            </div>
                            {/* Card 2 */}
                            <div className="flex-1 bg-white shadow-lg p-6 text-center">
                                <div className="flex justify-center mb-3">
                                    <MessagesSquare className="fill-[#0db4b2] text-lg w-20 h-20" />
                                </div>
                                <h2 className="text-2xl mb-3">Contact Customer Support</h2>
                                <p className="text-gray-700 mb-4 font-normal">
                                    Sometimes you need a little help. Don’t worry… we’re here for you.
                                </p>
                                <button className="bg-[#0db4b2] text-white px-4 py-2 rounded hover:bg-[#be5c33] mb-4">
                                    Contact Support
                                </button>
                                <p className="text-gray-700 mb-2 font-normal">
                                    Or Email Us at <br /><strong><a href="#">sales@mohann.com</a></strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <ContactSection />
        </main>
    );
}
