"use client"

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export default function StudentLife() {
  return (
    <main>
      <section id="campus" className="w-full bg-brand">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 grid grid-col-1 md:grid-cols-2 gap-12 relative">
          <div className="flex flex-col justify-center text-white gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our Campus</h2>
            <p >
              Knightsbridge House's Nonthaburi campus in Thailand is located
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

      <section id="facilities" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary text-center">
            Facilities
          </h2>

          <Carousel className="w-full relative" opts={{ loop: true }} plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            })
          ]}>
            <CarouselContent className="-ml-4">
              {/* Modern Classrooms */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center h-full'>
                  <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="images/student-life/classroom.jpeg"
                      alt="Modern Classrooms"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold pt-8'>Modern Classrooms</h3>
                  <p className='pt-4'>
                    Our classrooms are designed to provide a comfortable and conducive learning environment for students.
                  </p>
                </div>
              </CarouselItem>

              {/* Science Lab */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center h-full'>
                  <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="images/student-life/science-lab.jpg"
                      alt="Science Lab"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold pt-8'>Science Lab</h3>
                  <p className='pt-4'>
                    Our science lab is equipped with the latest technology and equipment to support our students' learning.
                  </p>
                </div>
              </CarouselItem>

              {/* Library */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center h-full'>
                  <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="images/student-life/library.jpg"
                      alt="Library"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold pt-8'>Library</h3>
                  <p className='pt-4'>
                    Our library is a quiet and peaceful place for students to read and study.
                  </p>
                </div>
              </CarouselItem>

              {/* Art Studio */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center h-full'>
                  <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="images/student-life/art-studio.jpg"
                      alt="Art Studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold pt-8'>Art Studio</h3>
                  <p className='pt-4'>
                    Our art studio is a place for students to express their creativity and imagination.
                  </p>
                </div>
              </CarouselItem>

              {/* Sports Field */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className='border border-brand-secondary rounded-2xl p-6 bg-brand text-white text-center h-full'>
                  <div className="place-self-center relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="images/student-life/sports-field.jpg"
                      alt="Sports Field"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl font-semibold pt-8'>Sports Field</h3>
                  <p className='pt-4'>
                    Our sports field is a place for students to play and exercise.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 text-brand-secondary" />
            <CarouselNext className="absolute -right-12 text-brand-secondary" />
          </Carousel>

        </div>
      </section>
    </main>
  );
}
