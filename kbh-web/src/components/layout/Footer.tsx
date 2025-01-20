"use-client";

// Import Statements
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Linkedin, MapPin, Calendar, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-secondary text-white py-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
            {/* KBH LOGO AND NAME SECTION */}
            <div className="flex flex-col items-center">
                <Image
                    src="/images/logo/logo-no-words-white.png"
                    alt="Knightsbridge House"
                    width={125}
                    height={125}
                    className="object-contain"
                />
                <h2 className="text-2xl font-bold"> Knightsbridge House </h2>
                <p className="text-md">
                    Quality Education for Everyone
                </p>
            </div>

            {/* THAILAND BRANCH DETAILS */}
            <div className="flex flex-col justify-between gap-4">
                <div className="grid gap-2">
                    <h3 className="text-lg font-semibold">THAILAND</h3>
                    <div className="flex items-start gap-2 text-sm">
                        <Mail size={16} className="flex-shrink-0" />
                        <a href="mailto:admissions@kbh.co.th" className="hover:underline">
                            admissions@kbh.co.th
                        </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                        <MapPin size={16} className="flex-shrink-0" />
                        <p className="text-sm">
                            94-3 Sukha Pracha San 3 Lane, Bang Phut Sub-district, Pak Kret District, Nonthaburi 11120, Thailand
                        </p>
                    </div>
                </div>

                <div className="grid gap-2">
                    <h3 className="text-lg font-semibold">HOURS (THAILAND)</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="flex-shrink-0" />
                        <p className="text-sm"> Monday - Friday </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="flex-shrink-0" />
                        <p className="text-sm"> 0800 - 1700 </p>
                    </div>
                </div>
            </div>

            {/* SINGAPORE BRANCH DETAILS */}
            {/* <div className="flex flex-col justify-between gap-4">
                <div className="grid gap-2">
                    <h3 className="text-lg font-semibold">SINGAPORE</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <Mail size={16} className="flex-shrink-0" />
                        <a href="mailto:admissions@kbh.edu.sg" className="hover:underline">
                            admissions@kbh.edu.sg
                        </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                        <MapPin size={16} className="flex-shrink-0" />
                        <p className="text-sm">
                            67 Jalan Bukit Merah, Connection One, Tower 4 #02-15, S(150167), Singapore
                        </p>
                    </div>
                </div>
                <div className="grid gap-2">
                    <h3 className="text-lg font-semibold">HOURS (SINGAPORE)</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="flex-shrink-0" />
                        <p className="text-sm"> Monday - Friday </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="flex-shrink-0" />
                        <p className="text-sm"> 0800 - 1730 </p>
                    </div>
                </div>
            </div > */}

            {/* MAP SECTION */}
            <div className="flex flex-col gap-2" >
                <h3 className="text-lg font-semibold">LOCATE US ON GOOGLE MAPS</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.5182413677367!2d100.51618627571231!3d13.927719786482715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284bf07b056ef%3A0x48d77e1a588c7734!2sPichaya%20Suksa%20School!5e0!3m2!1sen!2ssg!4v1737354656402!5m2!1sen!2ssg"
                    width="100%"
                    height="150"
                    className="rounded-lg border-0"
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Knightsbridge House Thailand Location"
                    aria-label="Google Maps showing location of Knightsbridge House Thailand"
                />
            </div>

            {/* FOLLOW US SECTION */}
            <div className="flex flex-col gap-2" >
                <h3 className="text-lg font-semibold">FOLLOW US</h3>
                <div className="flex gap-5">
                    <Link href="https://www.facebook.com/people/Knightsbridge-House-Nonthaburi/61570369682424/" aria-label="Facebook" className="hover:scale-125 transition-transform duration-200">
                        <Facebook className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://www.instagram.com/knightsbridgehouse/" aria-label="Instagram" className="hover:scale-125 transition-transform duration-200">
                        <Instagram className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/knightsbridge-house/" aria-label="Linkedin" className="hover:scale-125 transition-transform duration-200">
                        <Linkedin className="w-6 h-6 text-white" />
                    </Link>
                </div>
            </div >
        </footer >
    );
};