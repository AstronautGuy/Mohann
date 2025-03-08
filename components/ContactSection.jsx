import React from 'react';
import '/app/globals.css'
import { MapPin, Mail, Phone, Facebook, Instagram, } from "lucide-react";
import MapSection from "@/components/maps";

export default function ContactSection() {
    return (
        <>
        <section className="relative flex justify-center items-center min-h-screen bg-gray-100">

            {/* Desktop Layout */}
            <div className="hidden lg:block relative min-w-[1100px] min-h-[550px] flex">
                {/* Left Panel: Contact Info (Desktop) */}
                <div
                    className="absolute top-[40px] w-[360px] p-[20px] flex flex-col items-center justify-center z-[1] bg-[#fa4c4c]"
                    style={{
                        boxShadow: '0 10px 10px rgba(0,0,0,0.5)',
                        height: 'calc(100% - 80px)'
                    }}
                >
                    <h2 className=" text-2xl mb-4 mt-10">Contact Info</h2>
                    <ul className="">
                        <li className="flex items-center space-x-3 mb-5 font-normal">
                            <MapPin size={120} className="opacity-50 -mt-40 hover:opacity-100 transition-opacity" />                            <span className="opacity-75">
                                <strong>Registered Office & Unit I</strong><br />
                                Plot No. 387, GIDC Savli, Manjusar, Dist Vadodara 391775, Gujarat India <br />
                                <strong>Associated Unit II</strong><br />
                                Survey no.657/1,Vasad Sarsa Road, Nr.Express Highway Over Bridge, At Verakhadi, Anand
                                388365, Gujarat, India
                                (C/o ABG Engineering)</span>
                        </li>
                        <li className="flex items-center space-x-3 mb-10 font-normal">
                            <Mail size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            <span className="opacity-75"><strong>sales@mohann.com</strong></span>
                        </li>
                        <li className="flex items-center space-x-3 mb-10 font-normal">
                            <Phone size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            <span className="opacity-75"><strong>+91-875812 4554</strong></span>
                        </li>
                    </ul>
                    <ul className="flex mb-10">
                        <li className="mr-4">
                            <a href="#">
                                <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="#">
                                <Instagram size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="#">
                                <a href="#">
                                    <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                                </a>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="#">
                                <Instagram size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <a href="#">
                                    <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                                </a>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Panel: Contact Form (Desktop) */}
                <div
                    className="absolute bg-white px-[50px] py-[70px]"
                    style={{
                        paddingLeft: '250px',
                        marginLeft: '150px',
                        height: '100%',
                        boxShadow: '0 50px 50px rgba(0,0,0,0.5)'
                    }}
                >
                    <h2 className="text-[#0f3959] text-2xl font-medium">Send a Message</h2>
                    <div className="flex justify-between flex-wrap pt-[30px]">
                        {/* First Name */}
                        {/* Desktop Form Field Example */}
                        <div className="relative w-[47%] mb-[35px]">
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                className="peer w-full p-[10px_5px] text-[18px] text-[#333] border-b border-black outline-none transition-all font-normal"
                            />
                            {/* Bottom glow effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#fa4c4c] origin-left transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        {/* Last Name */}
                        <div className="relative w-[47%] mb-[35px]">
                            <input
                                type="text"
                                required
                                placeholder="Last Name"
                                className="peer w-full p-[10px_5px] text-[18px] text-[#333] border-b border-black outline-none transition-all font-normal"
                            />
                            {/* Bottom glow effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#fa4c4c] origin-left transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 "></div>
                        </div>

                        {/* Email */}
                        <div className="relative w-[47%] mb-[35px]">
                            <input
                                type="text"
                                required
                                placeholder="Email"
                                className="peer w-full p-[10px_5px] text-[18px] text-[#333] border-b border-black outline-none transition-all font-normal"
                            />
                            {/* Bottom glow effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#fa4c4c] origin-left transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                        </div>

                        {/* Mobile Number */}
                        <div className="relative w-[47%] mb-[35px]">
                            <input
                                type="text"
                                required
                                placeholder="Phone Number"
                                className="peer w-full p-[10px_5px] text-[18px] text-[#333] border-b border-black outline-none transition-all font-normal"
                            />
                            {/* Bottom glow effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#fa4c4c] origin-left transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                        </div>

                        {/* Message */}
                        <div className="relative w-full mb-[35px] group">
              <textarea
                  required
                  placeholder="Message...."
                  className="peer w-full p-[10px_5px] text-[18px] text-[#333] outline-none border border-[#777] resize-none font-normal"
              />
                            <span className="pointer-events-none absolute left-[5px] top-[5px] text-[17px] font-light transition-all
                peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:font-semibold peer-focus:tracking-wider peer-focus:text-pink-500
                peer-valid:-translate-y-5 peer-valid:text-xs peer-valid:font-semibold peer-valid:tracking-wider peer-valid:text-pink-500">
              </span>
                        </div>

                        {/* Submit Button */}
                        <div className="relative w-full mb-[35px]">
                            <input
                                type="submit"
                                value="Submit"
                                className="cursor-pointer bg-black text-white py-[12px] px-4 hover:bg-[#fa4c4c] hover:font-medium transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden relative w-full p-6 space-y-6">
                {/* Left Panel: Contact Info (Mobile) */}
                <div
                    className="w-full p-6 flex flex-col items-center justify-center bg-[#fa4c4c]"
                    style={{ boxShadow: '0 10px 10px rgba(0,0,0,0.5)' }}
                >
                    <h2 className="text-white text-2xl font-medium">Contact Info</h2>
                    <ul className="my-5 text-center">
                        <li className="flex flex-col items-center my-3">
                            <MapPin size={50} className="opacity-50 hover:opacity-100 transition-opacity" />
                            <span className="opacity-75">
                                <strong>Registered Office & Unit I</strong><br />
                                Plot No. 387, GIDC Savli, Manjusar, Dist Vadodara 391775, Gujarat India <br />
                                <strong>Associated Unit II</strong><br />
                                Survey no.657/1,Vasad Sarsa Road, Nr.Express Highway Over Bridge, At Verakhadi, Anand
                                388365, Gujarat, India
                                (C/o ABG Engineering)</span>
                        </li>
                        <li className="flex flex-col items-center my-3">
                            <Mail size={50} className="opacity-50 hover:opacity-100 transition-opacity" />
                            <span className="text-white mt-2 font-light opacity-75">
                desmondjeon@gmail.com
              </span>
                        </li>
                        <li className="flex flex-col items-center my-3">
                            <Phone size={50} className="opacity-50 hover:opacity-100 transition-opacity" />
                            <span className="text-white mt-2 font-light opacity-75">
                0481-111-111
              </span>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="#">
                                <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Instagram size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Instagram size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Facebook size={30} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Panel: Contact Form (Mobile) */}
                <div className="bg-white p-6 shadow-lg">
                    <h2 className="text-[#0f3959] text-2xl font-medium mb-4">Send a Message</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#333]">First Name</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 outline-none focus:border-[#fa4c4c]"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#333]">Last Name</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 outline-none focus:border-[#fa4c4c]"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#333]">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full p-2 border border-gray-300 outline-none focus:border-[#fa4c4c]"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#333]">Mobile Number</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 outline-none focus:border-[#fa4c4c]"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#333]">Write Your Message Here.</label>
                            <textarea
                                required
                                className="w-full p-2 border border-gray-300 outline-none focus:border-[#fa4c4c] resize-none"
                                rows="4"
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full cursor-pointer bg-black text-white py-2 hover:bg-[#fa4c4c] transition-all"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
            <MapSection />
    </>
    );
}
