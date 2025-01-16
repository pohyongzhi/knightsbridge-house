"use client";

// Import Statements
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TimelineItem from "@/components/home/timeline/TimelineItem";
import InstagramEmbed from "@/components/home/instagram/InstagramEmbed";
import { BookHeart, Building, DollarSign, Earth, Instagram, School, Trophy, Facebook, Linkedin, ChevronUp } from "lucide-react";

export default function Home() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main>

            {/* SECTION 1: MAIN */}
            <section
                id="main-section"
                className="w-full relative"
                style={{
                    backgroundImage: "url('/images/home/hero-main.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "bg-brand"
                }}
            >
                {/* PURPLE OVERLAY  */}
                <div className="absolute inset-0 bg-gray-900/50" />

                <div className="relative max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                    <div className="flex flex-col gap-8 items-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white shadow-sm">
                            We Provide Quality International Education for Everyone
                        </h1>
                        <p className="text-white text-lg">
                            Knightsbridge House, an international school from Singapore, opens in Nonthaburi,
                            Bangkok in May 2025. We deliver quality education at affordable fees, fostering
                            academic excellence while developing students' critical thinking, creativity, and character.
                        </p>
                        <div className="mt-8 gap-8 sm:hidden">
                            <Button
                                className="hover:scale-110 transition-all duration-100"
                                variant="brandSecondary"
                                size="lg"
                                onClick={() => document.getElementById("what-we-offer")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                What We Offer
                            </Button>
                        </div>
                        <div className="mt-8 gap-8 hidden sm:flex">
                            <Button
                                className="hover:scale-110 transition-all duration-100"
                                variant="brandSecondary"
                                size="lg"
                                onClick={() => document.getElementById("what-we-offer")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                What We Offer
                            </Button>
                            <Button
                                className="hover:scale-110 transition-all duration-100"
                                variant="brandSecondary"
                                size="lg"
                                onClick={() => document.getElementById("our-socials")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Our Socials
                            </Button>
                            <Button
                                className="hover:scale-110 transition-all duration-100"
                                variant="brandSecondary"
                                size="lg"
                                onClick={() => document.getElementById("our-curriculum")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Our Curriculum
                            </Button>
                            <Button className="hover:scale-110 transition-all duration-100" variant="brandSecondary" size="lg">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: WHAT WE OFFER */}
            <section id="what-we-offer" className="flex justify-center flex-col max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                <h2 className="text-center pb-10 text-4xl font-bold text-brand-secondary">
                    What Knightsbridge House Offers
                </h2>
                <ol className="max-w-[600px] mx-auto ml-[3rem] sm:ml-[10rem] md:ml-[13rem] lg:ml-[21rem] flex flex-col pl-[30px] border-l-4 border-brand border-opacity-10 gap-8">
                    <TimelineItem
                        icon={
                            <School size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> A positive learning environment </p>
                                <p className="flex items-center text-gray-400">
                                    We foster student success through simple and effective education that sparks curiousity and creativity.
                                </p>
                            </>
                        }
                    />
                    <TimelineItem
                        icon={
                            <Earth size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> A world-class international curriculum </p>
                                <p className="flex items-center text-gray-400">
                                    We deliver Cambridge Primary and Lower Secondary education, with Mandarin, Thai and Singapore Mathematics streams.
                                    Our globally recognized program will expand to IGCSE and A-Levels.
                                </p>
                            </>
                        }
                    />
                    <TimelineItem
                        icon={
                            <BookHeart size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> Inspiring international teaching staff </p>
                                <p className="flex items-center text-gray-400">
                                    At KBH, we nurture each child's unique potential through dedicated teachers and personalized care, fostering happy and confident learners.
                                </p>
                            </>
                        }
                    />
                    <TimelineItem
                        icon={
                            <Trophy size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> Holistic extracurricular activities </p>
                                <p className="flex items-center text-gray-400">
                                    Beyond academics, students enjoy diverse activities including sports, arts and performing arts in our spacious green campus.
                                </p>
                            </>
                        }
                    />
                    <TimelineItem
                        icon={
                            <DollarSign size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> Affordable tuition fees </p>
                                <p className="flex items-center text-gray-400">
                                    We deliver quality international education at competitive rates through efficient operations and smart resource manahement,
                                    without compromising on teaching excellence or facilities.
                                </p>
                            </>
                        }
                    />
                    <TimelineItem
                        icon={
                            <Building size={64} className="text-brand-secondary" />
                        }
                        description={
                            <>
                                <p className="font-semibold text-lg"> Modern facilities </p>
                                <p className="flex items-center text-gray-400">
                                    Our campus combines academic and recreational activities, from modern classrooms and labs to sports amenities, including a pool and multi-purpose court.
                                </p>
                            </>
                        }
                    />
                </ol>
            </section>

            {/* SECTION 3: OUR SOCIALS */}
            <section
                id="our-socials"
                style={{ backgroundColor: "rgba(180, 135, 225, 0.5)" }}
            >
                <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-12 py-20 gap-12 items-center justify-center">
                    {/* Appear only on mobile */}
                    <h2 className="text-left text-5xl font-bold text-brand mb-4 md:hidden"> Our Socials </h2>
                    <div className="flex justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="rounded overflow-hidden">
                                <InstagramEmbed embedLink="https://www.instagram.com/p/CXNEk9Jv9UM/" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-4 max-w-[600px]">
                        <h2 className="hidden md:block text-3xl md:text-5xl font-bold text-brand mb-4"> Our Socials </h2>
                        <p className="text-xl mb-6 font-medium">
                            Dive into moments from their day-to-day activities, achievements, and special events. Celebrate milestones, explore their learning adventures, and feel closer to their school journey - all at your fingertips!
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Button
                                className="text-white py-2 px-6 rounded-[12px] hover:scale-110 transition-transform duration-300"
                                variant="brandSecondary"
                                style={{ lineHeight: "1.5", height: "40px" }}
                            >
                                Call to action
                            </Button>
                            <div className="flex items-center gap-4">
                                <Link href="https://www.facebook.com/people/Knightsbridge-House-Nonthaburi/61570369682424/" aria-label="Facebook" className="hover:scale-125 transition-transform duration-200">
                                    <Facebook className="w-6 h-6 text-purple-800" />
                                </Link>
                                <Link href="https://www.instagram.com/knightsbridgehouse/" aria-label="Instagram" className="hover:scale-125 transition-transform duration-200">
                                    <Instagram className="w-6 h-6 text-purple-800" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/knightsbridge-house/" aria-label="Linkedin" className="hover:scale-125 transition-transform duration-200">
                                    <Linkedin className="w-6 h-6 text-purple-800" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: OUR CURRICULUM */}
            <section id="our-curriculum" className="bg-white max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                <div className="max-mx-auto text-center">
                    <h2 className="text-5xl font-semibold text-brand-secondary mb-8"> Our <br /> Curriculum </h2>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-10 lg:gap-40 relative">
                        <div className="bg-brand-tertiary rounded-[12px] overflow-hidden shadow-md">
                            <Image
                                src="/images/home/curriculum-globally-recognised-education.jpg"
                                alt="Globally Recognised Education"
                                width={100}
                                height={100}
                                className="object-cover w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center text-purple-800"> Globally Recognised Education </h3>
                            </div>
                        </div>
                        <div className="bg-brand-tertiary rounded-[12px] overflow-hidden shadow-md">
                            <Image
                                src="/images/home/curriculum-comprehensive-education.jpg"
                                alt="Comprehensive Education"
                                width={100}
                                height={100}
                                className="object-cover w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center text-purple-800"> Comprehensive Education </h3>
                            </div>
                        </div>
                        <div className="bg-brand-tertiary rounded-[12px] overflow-hidden shadow-md">
                            <Image
                                src="/images/home/curriculum-language-support-programs.jpg"
                                alt="Language Support Programs"
                                width={100}
                                height={100}
                                className="object-cover w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center text-purple-800"> Language Support Programs </h3>
                            </div>
                        </div>
                        <div className="bg-brand-tertiary rounded-[12px] overflow-hidden shadow-md">
                            <Image
                                src="/images/home/curriculum-trilingual-curriculum.jpg"
                                alt="Trilingual Education"
                                width={100}
                                height={100}
                                className="object-cover w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center text-purple-800"> Trilingual Education </h3>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                            <Image
                                src="/images/logo/logo-no-words-purple.png"
                                alt="KBH Logo"
                                width={180}
                                height={180}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {
                showScrollToTop && (
                    <button
                        onClick={() => document.getElementById("main-section")?.scrollIntoView({ behavior: "smooth" })}
                        className="fixed bottom-8 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={28} />
                    </button>
                )
            }
        </main >
    );
};