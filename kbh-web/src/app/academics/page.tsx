// Import Statements
import React from 'react';

export default function Academics() {
    return (
        <main>
            <section id="curriculum" className="w-full">
                <div className="max-w-screen-xl mx-auto px-8 flex flex-col sm:px-10 lg:px-12 py-20 sm:flex-row gap-8 items-center">
                    <div className="grid flex-grow">
                            <h2 className="text-4xl font-bold mb-1 text-brand-secondary"> Curriculum Overview </h2>

                            <div className="flex flex-col flex-grow w-full gap-8 mx-auto mt-5 sm:flex-row">
                                {/* PRIMARY */}
                                <div className="bg-brand-tertiary p-8 rounded-lg shadow-sm flex flex-col flex-1 gap-y-6 flex-grow">
                                    <h3 className="text-xl font-semibold text-brand-secondary mt-2">
                                        Primary (Year 1 - Year 6)
                                    </h3>
                                    <div className="w-full font-semibold text-gray-800">
                                        Subjects Taught in English
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>English Language</li>
                                            <li>Mathematics</li>
                                            <li>Science</li>
                                            <li>Humanities</li>
                                            <li>Digital Literacy</li>
                                            <li>Art and Design</li>
                                            <li>Physical Education</li>
                                        </ul>
                                    </div>
                                    <div className="font-semibold text-gray-800">
                                        Subjects Taught in Mandarin
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>Chinese Language</li>
                                        </ul>
                                    </div>
                                    <div className="font-semibold text-gray-800">
                                        Subjects Taught in Thai
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>Thai Language</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* SECONDARY */}
                                <div className="bg-brand-tertiary p-8 rounded-lg shadow-sm flex flex-col flex-1 gap-y-6 flex-grow">
                                    <h3 className="text-xl font-semibold text-brand-secondary mt-2">
                                        Secondary (Year 7 - Year 12)
                                    </h3>
                                    <div className="font-semibold text-gray-800">
                                        Subjects Taught in English
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>English Language</li>
                                            <li>Mathematics</li>
                                            <li>Science</li>
                                            <li>Humanities</li>
                                            <li>Digital Literacy</li>
                                            <li>Art and Design</li>
                                            <li>Physical Education</li>
                                        </ul>
                                    </div>
                                    <div className="font-semibold text-gray-800">
                                        Subjects Taught in Mandarin
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>Chinese Language</li>
                                        </ul>
                                    </div>
                                    <div className="font-semibold text-gray-800">
                                        Subjects Taught in Thai
                                        <ul className="bg-brand p-4 rounded-lg text-white text-opacity-90 font-semibold flex flex-col gap-2 mt-2">
                                            <li>Thai Language</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section id="language-programs" className="w-full">
                <div className="max-w-screen-xl mx-auto px-8 flex flex-col sm:px-10 lg:px-12 py-20 sm:flex-row gap-8 items-center">
                    <div className="grid flex-grow">
                            <h2 className="text-4xl font-bold mb-1 text-brand-secondary"> Language Programs </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}
