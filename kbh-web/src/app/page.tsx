import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Home() {
    return (
        <main>
            <section className="w-full bg-brand">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex flex-col flex-1">
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                Quality International Education for Everyone
                            </h1>
                            <p className="mt-4 text-white">
                                Knightsbridge House, an international school
                                from Singapore, opens in Nonthaburi, Bangkok in
                                May 2025. We deliver quality education at
                                affordable fees, fostering academic excellence
                                while developing students' critical thinking,
                                creativity, and character.
                            </p>
                            <div className="mt-10">
                                <Button  variant="brandSecondary" size="lg">
                                    Contact us
                                </Button>
                            </div>
                        </div>
                        <div className="relative w-full md:w-[45%] min-h-[200px] h-48 sm:h-64 md:h-72 lg:h-80">
                        <picture>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="/images/hero/hero-main-mobile.svg"
                                />
                                <Image
                                    src="/images/hero/hero-main.svg"
                                    alt="Student learning"
                                    fill
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                    sizes="(max-width: 767px) 100vw, 45vw"
                                    priority
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h2 className="text-center pb-10 text-3xl font-semibold text-brand-secondary sm:text-center md:text-center lg:text-center">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Card >
                            <CardHeader>
                                <CardTitle>A positive learning environment</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                        </Card>

                    </div>  
                </div>
            </section>
            <section className="w-full bg-brand">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white flex flex-col">
                    <h2 className="pb-10 text-3xl font-semibold text-center sm:text-start md:text-start lg:text-start">
                        Our Curriculum
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="flex flex-col text-center">
                            <div className="flex flex-col min-h-[200px] relative rounded-2xl overflow-hidden bg-white">
                                <Image src="/images/home/global.jpg" alt="Curriculum" fill className="object-cover"/>
                            </div>
                            <p className="text-lg py-4">Global Recognised Curriculum</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="flex flex-col min-h-[200px] relative rounded-2xl overflow-hidden bg-white">
                                <Image src="/images/home/global.jpg" alt="Curriculum" fill className="object-cover"/>
                            </div>
                            <p className="text-lg py-4">Global Recognised Curriculum</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="flex flex-col min-h-[200px] relative rounded-2xl overflow-hidden bg-white">
                                <Image src="/images/home/global.jpg" alt="Curriculum" fill className="object-cover"/>
                            </div>
                            <p className="text-lg py-4">Global Recognised Curriculum</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="flex flex-col min-h-[200px] relative rounded-2xl overflow-hidden bg-white">
                                <Image src="/images/home/global.jpg" alt="Curriculum" fill className="object-cover"/>
                            </div>
                            <p className="text-lg py-4">Global Recognised Curriculum</p>
                        </div>
                      
                    </div>
                    <div className="sm:justify-start md:justify-start lg: justify-start mt-10">
                        <Button variant="brandSecondary" size="lg">
                            Learn more
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
