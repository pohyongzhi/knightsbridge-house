'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Phone } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between py-5 px-5 sm:px-0" style = {{ fontFamily: '"Inter", serif' }}>
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/images/logo/logo.png"
                    alt="Logo"
                    width={150}
                    height={80}
                    priority
                />
            </Link>

            {/* Mobile menu handling */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Mobile menu panel */}
                {isMenuOpen && (
                    <div className="absolute top-24 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
                        <div className="flex flex-col text-center gap-5 text-lg text-gray-800">
                            <Link
                                href="/"
                                className="hover:text-primary transition-colors text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className="hover:text-primary transition-colors text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>

                            <Link
                                href="/academics"
                                className="hover:text-primary transition-colors text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Academics
                            </Link>

                            <Link
                                href="/student-life"
                                className="hover:text-primary transition-colors text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Student Life
                            </Link>

                            <Link
                                href="/admission"
                                className="hover:text-primary transition-colors text-xs"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Admissions
                            </Link>

                            <Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-[550]">
                <Link href="/" className="nav-link hover:text-brand-secondary hover:scale-105 transition-colors duration-100 text-sm">
                    Home
                </Link>

                {/* About Us Dropdown */}
                <div
                    className="relative group"
                >
                    <Link
                        href="/about"
                        className="nav-link flex items-center hover:text-primary transition-colors text-sm"
                    >
                        About Us
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link
                            href="/about#message"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Founder's Message
                        </Link>
                        <Link
                            href="/about#story"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/about#our-mission"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Our Mission
                        </Link>
                        <Link
                            href="/about#partnership"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Partnership with Pichayasuksa
                        </Link>
                    </div>
                </div>

                {/* Academics Dropdown */}
                <div
                    className="relative group"
                >
                    <Link
                        href="/academics"
                        className="nav-link flex items-center hover:text-primary transition-colors text-sm"
                    >
                        Academics
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link
                            href="/academics#curriculum"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Our Curriculum
                        </Link>
                        <Link
                            href="/academics#primary"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Primary Years (Year 1-6)
                        </Link>
                        <Link
                            href="/academics#secondary"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Lower Secondary (Year 7-8)
                        </Link>
                    </div>
                </div>

                {/* Student Life Dropdown */}
                <div
                    className="relative group"
                >
                    <Link
                        href="/student-life"
                        className="nav-link flex items-center hover:text-primary transition-colors text-sm"
                    >
                        Student Life
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link
                            href="/student-life/#campus"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Our Campus
                        </Link>
                        <Link
                            href="/student-life/#facilities" 
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Facilities
                        </Link>
                    </div>
                </div>

                {/* Admissions Dropdown */}
                <div
                    className="relative group"
                >
                    <Link
                        href="/admission"
                        className="nav-link flex items-center hover:text-primary transition-colors text-sm"
                    >
                        Admissions
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link
                            href="/admission#school-fees"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            School Fees
                        </Link>
                        <Link
                            href="/admission#join-us"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            Join Our Team
                        </Link>
                        <Link
                            href="#admission-faq"
                            className="block px-4 py-3 hover:bg-gray-100 text-xs"
                        >
                            FAQs
                        </Link>
                    </div>
                </div>

                <Link href="/contact">
                    <Button variant="brandSecondary" className="hover:bg-brand-secondary/90 hover:scale-110 transition-transform duration-200 font-[450] ">
                        <Phone className="h-5 w-5" />
                        Contact Us
                    </Button>
                </Link>
            </nav>
        </header>
    );
}
