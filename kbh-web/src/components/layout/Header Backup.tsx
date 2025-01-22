'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between py-5 px-5 sm:px-0">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo"
                        width={150}
                        height={80}
                        priority
                    />
                </Link>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Mobile Menu Panel */}
                    {isMenuOpen && (
                        <div className="absolute top-[80px] left-0 right-0 bg-white shadow-lg z-50">
                            <div className="flex flex-col p-4">
                                <Link
                                    href="/"
                                    className="py-2 px-4 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/about"
                                    className="py-2 px-4 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/academics"
                                    className="py-2 px-4 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Academics
                                </Link>

                                <Link
                                    href="/student-life"
                                    className="py-2 px-4 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Student Life
                                </Link>

                                <Link
                                    href="/admissions"
                                    className="py-2 px-4 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Admissions
                                </Link>

                                <Link
                                    href="/contact"
                                    className="py-2 px-4 text-primary hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>

                            </div>
                        </div>
                    )}

                </div>
                <div className="hidden md:flex justify-evenly items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* HOME */}
                            <NavigationMenuItem className="relative">
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* ABOUT US */}
                            <NavigationMenuItem className="relative">
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuTrigger>
                                        About Us
                                    </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[250px]">
                                        <li>
                                            <Link
                                                title="Founder's Message"
                                                href="/about#message"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Our Story"
                                                href="/about#story"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Our Mission"
                                                href="/about#our-mission"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="School Values"
                                                href="/about#values"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Partnership with Pichayasuksa"
                                                href="/about#partnership"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Leadership Team"
                                                href="/about#leaders"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Accreditation"
                                                href="/about#accreditation"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ACADEMICS */}
                            <NavigationMenuItem className="relative">
                                <Link href="/academics" legacyBehavior passHref>
                                    <NavigationMenuTrigger>
                                        Academics
                                    </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[300px]">
                                        <li>
                                            <Link
                                                title="Our Curriculum"
                                                href="/academics#curriculum"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Primary Years (Year 1-6)"
                                                href="/academics#primary"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Lower Secondary (Year 7-8)"
                                                href="/academics#secondary"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Language Programs"
                                                href="/academics#language-programs"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="STEM Education"
                                                href="/academics#stem"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="International Preparation Program"
                                                href="/academics#international-preparation-program"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* STUDENT LIFE */}
                            <NavigationMenuItem className="relative">
                                <Link href="/student-life" legacyBehavior passHref>
                                    <NavigationMenuTrigger>
                                        Student Life
                                    </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[300px]">
                                        <li>
                                            <Link
                                                title="Multicultural Community"
                                                href="/student-life/multicultural-community"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Extracurricular Activities"
                                                href="/student-life/extracurricular-activities"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Language & Cultural Enrichment"
                                                href="/student-life/enrichment"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="School Facilities"
                                                href="/student-life/facilities"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Community Engagement"
                                                href="/student-life/community-engagement"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ADMISSIONS */}
                            <NavigationMenuItem className="relative">
                                <Link href="/admission" legacyBehavior passHref>
                                    <NavigationMenuTrigger>
                                        Admissions
                                    </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[250px]">
                                        <li>
                                            <Link
                                                title="Requirements & Process"
                                                href="#"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="School Fees"
                                                href="#"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="Academic Calendar"
                                                href="#"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                title="FAQs"
                                                href="#admission-faq"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* CONTACT US*/}
                            <NavigationMenuItem className="relative">
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuViewport />
                    </NavigationMenu>
                </div>
            </header>
        </>
    );
}
