import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
export default function StudentLife() {
  return (
    <main>
      <section className="w-full bg-brand">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 grid grid-col-1 md:grid-cols-2 gap-12 relative">
          <div className="flex flex-col justify-center text-white gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our Campus</h2>
            <p >
              Knightsbridge House’s Nonthaburi campus in Thailand is located
              in the suburbs of Bangkok, offering a spacious and green
              environment.
              <br />
              <br />
              Facilities include well-equipped classrooms, a science lab, and art studio, sports fields,
              a swimming pool, and more.
              <br />
              <br />
              KBH will be a fully independent international school. While located within the premises
              of Pichayasuksa School, our school will be separated physically, with the management,
              curriculum, teaching staff, and operational standards adhering to international school
              benchmarks.
              <br />
              <br />
              The school is conveniently located 3km away from BTS Station (Pink Line) Chaeng
              Wattana-Pak Kret 28, which is next to Central ChaengWatthana, a major shopping and
              lifestyle hub.
            </p>
          </div>
          <div className="place-self-center relative aspect-[16/9] w-full max-w-[800px] overflow-hidden rounded-2xl">
            <Image
              src="images/student-life/campus.png"
              alt="Campus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Modern & well-equipped classrooms
Science lab
Library
Art studio
Sports field
Multi-purpose court
Swimming pool */}

      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary text-center">
            Facilities
          </h2>
          <div className='flex flex-col sm:flex-row gap-[3rem]'>
            <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center'>
              <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="images/student-life/campus.png"
                  alt="Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className='text-xl md:text-2xl font-semibold pt-8'>Modern & well-equipped classrooms</h3>
              <p>
                Our classrooms are designed to provide a comfortable and conducive learning environment for students.
              </p>
            </div>
            <div className='border border-brand-secondary rounded-2xl p-8 bg-brand text-white text-center'>
              <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src="images/student-life/campus.png"
                  alt="Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className='text-2xl md:text-3xl font-semibold pt-8'>Modern & well-equipped classrooms</h3>
              <p>
                Our classrooms are designed to provide a comfortable and conducive learning environment for students.
              </p>
            </div>
            <div className='border border-brand-secondary rounded-2xl p-8 bg-brand text-white text-center'>
              <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src="images/student-life/campus.png"
                  alt="Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className='text-2xl md:text-3xl font-semibold pt-8'>Modern & well-equipped classrooms</h3>
              <p>
                Our classrooms are designed to provide a comfortable and conducive learning environment for students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
