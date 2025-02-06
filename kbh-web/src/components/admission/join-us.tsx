import JobListings from "@/components/admission/job-listing";

export default function JoinUs() {
    return (
        <section id="admission-faq" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">
                    Join Us
                </h2>

                <p className="text-lg font-medium text-gray-700">
                    We are ALWAYS on the lookout for GREAT talent!
                </p>

                {/* Requirements Section */}
                <div className="mb-16">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">
                        We require our educators to have a minimum of:
                    </h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li className="flex items-start">
                            <span className="font-bold mr-2">1.</span>
                            2 years full time experience teaching at an international school
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold mr-2">2.</span>
                            A degree or diploma in education
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold mr-2">3.</span>
                            Be a registered teacher with a QTS or equivalent
                        </li>
                    </ul>
                </div>

                {/* Current Openings Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-6">
                        We are currently on the lookout for specialist Teachers who can teach any one of the following subjects in accordance with the Cambridge curriculum:
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {/* Teaching Positions */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-brand-secondary mb-4">
                                Primary and Lower Secondary School:
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Computing</li>
                                <li>• English</li>
                                <li>• Mathematics</li>
                                <li>• Science</li>
                                <li>• Mandarin</li>
                            </ul>
                        </div>

                        {/* Support Functions */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-brand-secondary mb-4">
                                Support Functions:
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <JobListings />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Application Section */}
                <div className="p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Interested in Joining Our Team?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Thank you for your interest in working with us. Kindly send your CV or job inquiries to:
                    </p>
                    <a
                        href="mailto:admissions@kbh.co.th"
                        className="text-xl font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        admissions@kbh.co.th
                    </a>
                </div>
            </div>
        </section>
    )
}