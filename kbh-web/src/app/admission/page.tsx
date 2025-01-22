import FAQ from "@/components/admission/faq/FAQ";
import Link from "next/link"

export default function Admission() {
  return (
    <main>
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

      <FAQ />

      <section id="admission-faq" className="w-full bg-brand-tertiary">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">
            Join Us
          </h2>

          <p className="text-2xl font-medium text-gray-700">
            We are ALWAYS on the lookout for GREAT talent!
          </p>

          {/* Requirements Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              WE REQUIRE OUR EDUCATORS TO HAVE A MINIMUM OF:
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                2 YEARS FULL TIME EXPERIENCE TEACHING AT AN INTERNATIONAL SCHOOL
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                A DEGREE OR DIPLOMA IN EDUCATION
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                BE A REGISTERED TEACHER WITH A QTS OR EQUIVALENT
              </li>
            </ul>
          </div>

          {/* Current Openings Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
                  <li>• HR & Admin Manager</li>
                  <li>• Admissions & Marketing Officer</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-lg">
              We take on board teachers throughout the year as our school grows.
            </p>
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
    </main>
  );
}
