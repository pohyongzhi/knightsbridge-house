// Import Statements
import React from "react";
import Image from "next/image"; // To be replaced with the respective images

export default function About() {
    return (
        <div className = "container mx-auto px-4 py-8 mt-5">
            <header className = "flex flex-row items-center justify-center text-center mb-5 w-full gap-10">
                <div className = "mb-2">
                    <p className = "text-3xl text-gray-600"> Our Aim </p>
                </div>
                <div className = "text-gray-700 w-3/4 text-3xl">
                    <p>
                        To be a global leader in high-quality, affordable education, ensuring that exceptional learning opportunities are accessible to every child, empowering them to achieve their fullest potential.
                    </p>
                </div>
            </header>

            <section id = "message" className = "mb-12 relative p-28">
                <h2 className = "text-3xl font-semibold text-purple-800 mb-4"> Founder's Message </h2>
                <div className = "flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div className = "text-gray-700 leading-relaxed text-left lg:w-3/5">
                        <p className = "mb-4">
                            As a lifelong entrepreneur and a father, I have always been driven by the belief that quality education should be both excellent and accessible. This belief inspired me to establish Knightsbridge House (KBH) International School in Singapore, built on the foundation of providing exceptional academic programs that empower students to excel globally.
                        </p>
                        <p className = "mb-4">
                            Drawing from my experience in founding successful ventures, including Invictus International School, I’ve seen firsthand how a strong educational framework can transform lives. At KBH, we combine the globally recognized Cambridge curriculum with Singapore Math and Mandarin with a nurturing environment, enabling students to thrive academically and personally.
                        </p>
                        <p className = "mb-4">
                            We are excited to start our 1st International School campus in Nonthaburi, Thailand, bringing “Quality International Education for Everyone” from Singapore, and I look forward to greeting all of you.
                        </p>
                        <p className = "mb-4">
                            Join us for a school tour to find out more about KBH (Nonthaburi). Share in our passion for learning, and belief that quality education should be a right and not a privilege. Education changes the world, come and see how we do it!
                        </p>
                        <p>
                            Warm regards,
                        </p>
                        <p className = "font-semibold">
                            John Fearon
                        </p>
                        <p>
                            Founder, KBH International School
                        </p>/
                    </div>
                    {/*
                        1. Image to be replaced with founder's image
                        2. Ensure proper rounded image
                    */}
                    <div className = "lg:w-2/5 lg:flex lg:justify-end lg:items-end mt-8 lg:mt-0 relative">
                        <Image
                            src = "/images/about/founder.svg"
                            alt = "Student learning"
                            width = {400}
                            height = {400}
                        />
                    </div>
                </div>
            </section>

            <section id = "story" className = "mb-12 p-16">
                <div className = "flex flex-col lg:flex-row lg:items-center lg:gap-8">
                    {/*
                        1. To be replaced with relevant image
                    */}
                    <div>
                        <Image
                            src = "/images/hero/hero-main.svg"
                            alt = "Student learning"
                            width = {300}
                            height = {800}
                            className = "rounded-lg object-cover border w-[200px] h-[300px]"
                        />
                    </div>
                    <div className = "lg:w-2/3 ml-5">
                        <h2 className = "text-3xl font-semibold text-purple-800"> Our Story </h2>
                        <div className = "flex items-center">
                            <h3 className = "text-xl font-semibold text-gray-800 mb-4 mt-2"> Since 2021 </h3>
                            <div className = "flex h-[1px] bg-gray-300 mb-2 ml-4 w-3/4"></div>
                        </div>
                        <p className = "text-gray-700 leading-relaxed">
                            Knightsbridge House International School was founded by Mr. John Fearon 
                            in Singapore and began operations in 2021. It runs the Cambridge 
                            International School curriculum. Within 3 years, the School grew from 5 
                            to 400+ students, the fastest growing International School in Singapore, 
                            driven by John’s vision of education that is both genuinely affordable 
                            and provides academic excellence. In Asia, John is also well known as 
                            the pioneer of the affordable International Schools market niche. He 
                            founded the Invictus International School brand in 2015 and grew it 
                            across Southeast Asia before a successful exit in 2019 to Sing-Ed Global 
                            Schoolhouse (Sing-Ed), an education investment funded by a Singapore property 
                            firm, Chip Eng Seng.
                        </p>
                    </div>
                </div>
            </section>

            <section id = "values" className = "mb-12 p-16">
                <h2 className = "text-2xl font-semibold text-gray-800 mb-4"> School Values </h2>
                <p className = "text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita alias nostrum mollitia, voluptates nam sequi sapiente minus totam nulla quasi illo eos blanditiis officiis eveniet corrupti adipisci tenetur velit? Unde.
                </p>
            </section>

            <section id = "partnership" className = "mb-12 p-16">
                <h2 className = "text-2xl font-semibold text-gray-800 mb-4"> Partnerships </h2>
                <p className = "text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel illo sunt aliquid eum obcaecati sint velit. Est fugiat labore corrupti sint eaque, aut laudantium molestias dignissimos aspernatur, sed totam?
                </p>
            </section>

            <section id="leaders" className="mb-12 p-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Leadership Team </h2>
                <p className = "text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptate neque architecto laboriosam repellendus quo nesciunt ea optio, tempora reiciendis, accusamus laborum accusantium beatae cupiditate consectetur facere, officia ipsum repellat?
                </p>
            </section>

            <section id = "accreditation" className = "mb-12 p-16">
                <h2 className = "text-2xl font-semibold text-gray-800 mb-4"> Accreditation </h2>
                <p className = "text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, eligendi odit, nisi voluptas illo totam, dolor dolores doloribus ex libero laboriosam eos? Ea obcaecati aliquam hic, sint facilis numquam.
                </p>
            </section>
        </div>
    );
};