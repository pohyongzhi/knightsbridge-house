"use-client";

// Import Statements
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className = "bg-purple-700 text-white py-10">
            <div className = "container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">

                {/* KBH LOGO AND NAME SECTION */}
                <div className = "space-y-1">
                    <Image
                        src = "/images/logo/logo-no-words-white.png"
                        alt = "Knightsbridge House"
                        width = {125}
                        height = {125}
                        className = "object-contain"
                    />
                    <h2 className = "text-3xl font-bold"> Knightsbridge House </h2>
                    <p className = "text-2xl">
                        Quality Education
                        <br />
                        for Everyone
                    </p>
                </div>

                {/* THAILAND BRANCH DETAILS */}
                <div>
                    <h3 className = "text-lg font-semibold mb-3"> THAILAND </h3>
                    <p className = "flex items-center text-sm">
                        <Mail className = "w-4 h-4 mr-2" />
                        <a href = "mailto:admissions@kbh.co.th" className = "hover:underline">
                            admissions@kbh.co.th
                        </a>
                    </p>
                    <p className = "text-sm mt-2">
                        94-3 Sukha Pracha San 3 Lane, Bang Phut Sub-district, Pak Kret District, Nonthaburi 11120, Thailand
                    </p>
                    <h3 className = "text-lg font-semibold mt-9 mb-3"> HOURS </h3>
                    <p className = "text-sm"> Monday - Friday </p>
                    <p className = "text-sm mt-2"> 0800 - 1700 </p>
                </div>

                {/* SINGAPORE BRANCH DETAILS */}
                <div>
                    <h3 className = "text-lg font-semibold mb-3"> SINGAPORE </h3>
                    <p className = "flex items-center text-sm">
                        <Mail className = "w-4 h-4 mr-2" />
                        <a href = "mailto:admissions@kbh.edu.sg" className = "hover:underline">
                            admissions@kbh.edu.sg
                        </a>
                    </p>
                    <p className = "text-sm mt-2">
                        67 Jalan Bukit Merah, Connection One, Tower 4 #02-15, S(150167), Singapore
                    </p>
                    <h3 className = "text-lg font-semibold mt-9 mb-3"> HOURS </h3>
                    <p className = "text-sm"> Monday - Friday </p>
                    <p className = "text-sm mt-2"> 0800 - 1730 </p>
                </div>

                {/* FOLLOW US SECTION */}
                <div className = "space-y-4 ml-12">
                    <h3 className = "text-lg font-semibold mt-36 ml-4"> FOLLOW US </h3>
                    <div className = "flex space-x-4 mt-4 gap-5">
                        <Link href = "https://www.facebook.com/people/Knightsbridge-House-Nonthaburi/61570369682424/" aria-label = "Facebook" className = "hover:scale-125 transition-transform duration-200">
                            <Facebook className = "w-6 h-6 text-white" />
                        </Link>
                        <Link href = "https://www.instagram.com/knightsbridgehouse/" aria-label = "Instagram" className = "hover:scale-125 transition-transform duration-200">
                            <Instagram className = "w-6 h-6 text-white" />
                        </Link>
                        <Link href = "https://www.linkedin.com/company/knightsbridge-house/" aria-label = "Linkedin" className = "hover:scale-125 transition-transform duration-200">
                            <Linkedin className = "w-6 h-6 text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};