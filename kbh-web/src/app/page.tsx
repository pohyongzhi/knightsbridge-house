import Image from "next/image";

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
                        </div>
                        <div className="relative w-full md:w-[45%] min-h-[200px] h-48 sm:h-64 md:h-72 lg:h-80">
                            <Image
                                src="/images/hero/hero-main.svg"
                                alt="Student learning"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
