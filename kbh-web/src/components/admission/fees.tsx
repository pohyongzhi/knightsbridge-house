import Link from "next/link";

export default function Fees() {
    return (
        <section id="school-fees" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">School Fees</h2>
                <p className="text-gray-700 text-lg">
                    The tuition fees will be THB 160,000 per year for Academic Year 2025/2026. For
                    Founding KBH students that enrol in this academic year, tuition fees will be fixed for
                    the next 5 years (Limited Seats).
                </p>
                <Link
                    href="https://drive.google.com/file/d/1H7kLLZooW4oOw5ZJdgewI9muM7j7jXZc/view"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Complete Fee Structure (PDF)</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}