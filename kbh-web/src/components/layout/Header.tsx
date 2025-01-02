// Import Statements
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuChildLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
    return (
        <>
            <header className = "flex justify-between py-5">
                <Link href = "/" className = "flex-shrink-0">
                    <Image
                        src = "/images/logo/logo.png"
                        alt = "Logo"
                        width = {120}
                        height = {40}
                        priority
                    />
                </Link>
                <div className = "hidden md:flex justify-evenly items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* HOME */}
                            <NavigationMenuItem className = "relative">
                                <Link href = "/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className = {navigationMenuTriggerStyle()}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* ABOUT US */}
                            <NavigationMenuItem className = "relative">
                                <NavigationMenuTrigger>
                                    About Us
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className = "grid gap-3 p-4 w-[250px]">
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Founder's Message"
                                                href = "/about#message"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Our Story"
                                                href = "/about#story"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "School Values"
                                                href = "/about#values"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Partnership with Pichayasuksa"
                                                href = "/about#partnership"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Leadership Team"
                                                href = "/about#leaders"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Accreditation"
                                                href = "/about#accreditation"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ACADEMICS */}
                            <NavigationMenuItem className = "relative">
                                <NavigationMenuTrigger>
                                    Academics
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className = "grid gap-3 p-4 w-[300px]">
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Our Curriculum"
                                                href = "/academics/curriculum"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Primary Years (Year 1-6)"
                                                href = "/academics/primary"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Lower Secondary (Year 7-8)"
                                                href = "/academics/secondary"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Language Programs"
                                                href = "/academics/language-programs"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "STEM Education"
                                                href = "/academics/stem"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "International Preparation Program"
                                                href = "/academics/international-preparation-program"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* STUDENT LIFE */}
                            <NavigationMenuItem className = "relative">
                                <NavigationMenuTrigger>
                                    Student Life
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className = "grid gap-3 p-4 w-[300px]">
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Multicultural Community"
                                                href = "/student-life/multicultural-community"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Extracurricular Activities"
                                                href = "/student-life/extracurricular-activities"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Language & Cultural Enrichment"
                                                href = "/student-life/enrichment"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "School Facilities"
                                                href = "/student-life/facilities"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Community Engagement"
                                                href = "/student-life/community-engagement"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* ADMISSIONS */}
                            <NavigationMenuItem className = "relative">
                                <NavigationMenuTrigger>
                                    Admissions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className = "grid gap-3 p-4 w-[250px]">
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Requirements & Process"
                                                href = "/admissions/requirements"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "School Fees"
                                                href = "/admissions/fees"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Academic Calendar"
                                                href = "/admissions/calendar"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Apply Now"
                                                href = "/admissions/apply"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "Book a School Tour"
                                                href = "/admissions/tour"
                                            />
                                        </li>
                                        <li>
                                            <NavigationMenuChildLink
                                                title = "FAQs"
                                                href = "/admissions/faqs"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* CONTACT US*/}
                            <NavigationMenuItem className = "relative">
                                <Link href = "/contact" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className = {navigationMenuTriggerStyle()}
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
};