import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { BookHeart, Building, DollarSign, Earth, School, Trophy } from "lucide-react";

export default function Home() {
    return (
        <main>
            <section className="w-full bg-brand">
                <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex flex-col flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold text-white">
                                We Provide Quality International Education for Everyone
                            </h1>
                            <p className="mt-4 text-white">
                                Knightsbridge House, an international school
                                from Singapore, opens in Nonthaburi, Bangkok in
                                May 2025. We deliver quality education at
                                affordable fees, fostering academic excellence
                                while developing students' critical thinking,
                                creativity, and character.
                            </p>
                            <div className="mt-10 flex justify-center md:justify-start">
                                <Button className="hover:scale-105 transition-all duration-100" variant="brandSecondary" size="lg">
                                    Contact us
                                </Button>
                            </div>
                        </div>
                        <div className="place-self-center relative aspect-[16/9] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="images/home/hero-main.svg"
                                alt="Campus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                    <h2 className="text-center pb-10 text-4xl font-bold text-brand-secondary sm:text-center md:text-center lg:text-center">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-10 bg-brand rounded-3xl">
                        <Card className="hover:scale-105 transition-all duration-100 ">
                            <CardHeader className="flex flex-col text-center items-center">
                                <School size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>A positive learning environment</CardTitle>
                                <CardDescription>We foster student success through simple, effective education that sparks curiosity and creativity.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:scale-105 transition-all duration-100">
                            <CardHeader className="flex flex-col text-center items-center">
                                <Earth size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>A world-class international curriculum</CardTitle>
                                <CardDescription>We deliver Cambridge Primary and Lower Secondary education, with Mandarin, Thai, and Singapore Math streams. Our globally recognized program will expand to IGCSE and A-Levels.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:scale-105 transition-all duration-100">
                            <CardHeader className="flex flex-col text-center items-center">
                                <BookHeart size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>Inspiring international teaching staff</CardTitle>
                                <CardDescription>At KBH, we nurture each child's unique potential through dedicated teachers and personalized care, fostering happy, confident learners.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:scale-105 transition-all duration-100">
                            <CardHeader className="flex flex-col text-center items-center">
                                <Trophy size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>Holistic extracurricular activities</CardTitle>
                                <CardDescription>Beyond academics, students enjoy diverse activities including sports, arts, and performing arts in our spacious green campus.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:scale-105 transition-all duration-100">
                            <CardHeader className="flex flex-col text-center items-center">
                                <DollarSign size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>Affordable tuition fee</CardTitle>
                                <CardDescription>We deliver quality international education at competitive rates through efficient operations and smart resource management, without compromising on teaching excellence or facilities.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:scale-105 transition-all duration-100">
                            <CardHeader className="flex flex-col text-center items-center">
                                <Building size={64} className="text-brand-secondary mb-4"/>
                                <CardTitle>Modern facilities</CardTitle>
                                <CardDescription>    Our campus combines academic and recreational facilities, from modern classrooms and labs to sports amenities including a pool and multi-purpose court.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>  
                </div>
            </section>
            <section className="w-full bg-brand">
                <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 text-white flex flex-col">
                    <h2 className="pb-10 text-4xl font-bold text-center sm:text-start md:text-start lg:text-start">
                        Our Curriculum
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="flex flex-col text-center font-semibold">
                            <div className="place-self-center relative aspect-[16/9] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="images/home/curriculum-globally-recognised-education.jpg"
                                        alt="Curriculum"
                                        fill
                                        className="object-cover"
                                    />
                            </div>
                            <p className="text-2xl py-4">Comprehensive Education</p>
                        </div>
                        <div className="flex flex-col text-center font-semibold">
                            <div className="place-self-center relative aspect-[16/9] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="images/home/curriculum-comprehensive-education.jpg"
                                        alt="Curriculum"
                                        fill
                                        className="object-cover"
                                    />
                            </div>
                            <p className="text-2xl py-4">Global Recognised Curriculum</p>
                        </div>
                        <div className="flex flex-col text-center font-semibold">
                            <div className="place-self-center relative aspect-[16/9] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="images/home/curriculum-trilingual-curriculum.jpg"
                                        alt="Curriculum"
                                        fill
                                        className="object-cover"
                                    />
                            </div>
                            <p className="text-2xl py-4">Trilingual Curriculum</p>
                        </div>
                        <div className="flex flex-col text-center font-semibold">
                            <div className="place-self-center relative aspect-[16/9] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="images/home/curriculum-language-support-programs.jpg"
                                        alt="Curriculum"
                                        fill
                                        className="object-cover"
                                    />
                            </div>
                            <p className="text-2xl py-4">Language Support Programmes</p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start mt-10">
                        <Button variant="brandSecondary" size="lg">
                            Learn more
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
