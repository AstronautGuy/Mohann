"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            {/* Main Header (Below Topbar) */}
            <header className="fixed top-[40px] left-0 w-full bg-white text-black p-4 shadow-md z-40">
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <Image src="../images/logoNoBg.png" alt="Logo" width={100} height={50} />
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 text-black font-bold text-md">
                        <nav className="hidden md:flex items-center text-black font-bold uppercase">
                            <Link href="/about" className="hover:text-gray-400 px-4">About Us</Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>

                            {/* Products with Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-gray-400 px-4 uppercase">Products</button>

                                {/* Dropdown Menu */}
                                <div className="absolute mt-2 w-72 bg-white border p-2 border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 gap-4">
                                    <Link href="/products/category1" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 1</Link>
                                    <Link href="/products/category2" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 2</Link>
                                    <Link href="/products/category3" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 3</Link>
                                    <Link href="/products/category4" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 4</Link>
                                    <Link href="/products/category5" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 5</Link>
                                    <Link href="/products/category6" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 6</Link>
                                    <Link href="/products/category7" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 7</Link>
                                    <Link href="/products/category8" className="px-4 py-2 hover:bg-gray-100 border-b-2 border-black whitespace-nowrap">Category 8</Link>
                                </div>
                            </div>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/projects" className="hover:text-gray-400 px-4">Project Supplies</Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/solutions" className="hover:text-gray-400 px-4">End-to-End Solutions</Link>
                            <span className="h-5 w-0.5 bg-amber-600"></span>
                            <Link href="/contact" className="hover:text-gray-400 px-4">Contact Us</Link>
                        </nav>
                    </nav>
                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Side Menu (Appears Below Topbar) */}
            <div
                className={`fixed top-[52px] z-50 right-0 h-full w-64 bg-white shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full z-50"
                } transition-transform duration-300 z-30`}
            >
                {/* Close Button & Logo */}
                <div className="flex items-center justify-between p-4 border-b border-black">
                    <Image src="../images/logoNoBg.png" alt="Logo" width={80} height={40} />
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} color="black"/>
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col p-4 space-y-4 text-black">
                    <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/products" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Project Supplies</Link>
                    <Link href="/solutions" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>End-to-End Solutions</Link>
                    <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </nav>
            </div>
        </>
    );
}