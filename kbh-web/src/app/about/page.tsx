// Import Statements
import React from 'react';
import Image from 'next/image';
import { Crosshair } from 'lucide-react';
export default function About() {
  return (
    <main>
      {/* Our Aim */}
      <section className="w-full bg-brand">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-18">
          <div
            id="our-aim"
            className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white"
          >
            <Crosshair size={128} className="text-brand-secondary order-last sm:order-first flex-shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-text-3xl md:text-4xl lg:text-5xl font-bold mb-1"> Our Aim </h2>
              <p className="text-xl">
                We aim to be a global leader in high-quality, affordable
                education, ensuring that exceptional learning opportunities are
                accessible to every child, empowering them to achieve their
                fullest potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="w-full bg-brand-tertiary">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col sm:flex-row gap-8 items-center bg-brand-tertiary">
          <div className="grid">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary mb-4">
              Founder's Message
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="text-gray-700 text-lg">
                <p className="mb-4">
                  As a lifelong entrepreneur and a father, I have always been
                  driven by the belief that quality education should be both
                  excellent and accessible. This belief inspired me to establish
                  Knightsbridge House (KBH) International School in Singapore,
                  built on the foundation of providing exceptional academic
                  programs that empower students to excel globally.
                </p>
                <p className="mb-4">
                  Drawing from my experience in founding successful ventures,
                  including Invictus International School, I’ve seen firsthand how
                  a strong educational framework can transform lives. At KBH, we
                  combine the globally recognized Cambridge curriculum with
                  Singapore Math and Mandarin with a nurturing environment,
                  enabling students to thrive academically and personally.
                </p>
                <p className="mb-4">
                  We are excited to start our 1st International School campus in
                  Nonthaburi, Thailand, bringing “Quality International Education
                  for Everyone” from Singapore, and I look forward to greeting all
                  of you.
                </p>
                <p className="mb-4">
                  Join us for a school tour to find out more about KBH
                  (Nonthaburi). Share in our passion for learning, and belief that
                  quality education should be a right and not a privilege.
                  Education changes the world, come and see how we do it!
                </p>
                <p>Warm regards,</p>
                <p className="font-semibold">John Fearon</p>
                <p>Founder, KBH International School</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square w-full min-w-[200px] max-w-[400px]">
            <Image
              src="/images/about/founder.svg"
              alt="Student learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="story"
        className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col sm:flex-row gap-8 items-center"
      >
        <div className="place-self-center relative aspect-[9/16] w-full min-w-[300px] max-w-[400px] order-last sm:order-first">
          <Image
            src="/images/about/merlion.jpeg"
            alt="Curriculum"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">
            Our Story
          </h2>
          <div className="flex items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-2">
              Since 2021
            </h3>
            <div className="flex h-[1px] bg-gray-300 mb-2 ml-4 flex-1"></div>
          </div>
          <p className="text-lg">
            Knightsbridge House International School was founded by Mr. John
            Fearon in Singapore and began operations in 2021. It runs the
            Cambridge International School curriculum. Within 3 years, the
            School grew from 5 to 400+ students, the fastest growing
            International School in Singapore, driven by John’s vision of
            education that is both genuinely affordable and provides academic
            excellence.

          </p>
          <br></br>
          <p className="text-lg">
            In Asia, John is also well known as the pioneer of the
            affordable International Schools market niche. He founded the
            Invictus International School brand in 2015 and grew it across
            Southeast Asia before a successful exit in 2019 to Sing-Ed Global
            Schoolhouse (Sing-Ed), an education investment funded by a Singapore
            property firm, Chip Eng Seng.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section
        id="mission"
        className="relative max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col sm:flex-row gap-8 items-center justify-start"
      >
        {/* Large quote mark background */}
        <div
          className="absolute top-[30px] left-[250px] md:top-0 md:left-[300px] lg:top-0 lg:left-[200px] text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] 
                   text-brand-tertiary rotate-45 select-none -z-10 leading-none font-madimi"
          aria-hidden="true"
        >
          "
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">
          Our Mission
        </h2>
        <p className="text-xl">To be a global leader in high-quality, affordable education, ensuring that exceptional learning opportunities are accessible to every child, empowering them to achieve their fullest potential.</p>
      </section>
      {/* <section id="values" className="mb-12 p-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          School Values
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          alias nostrum mollitia, voluptates nam sequi sapiente minus totam
          nulla quasi illo eos blanditiis officiis eveniet corrupti adipisci
          tenetur velit? Unde.
        </p>
      </section> */}

      {/* <section id="partnership" className="mb-12 p-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {' '}
          Partnerships{' '}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          vel illo sunt aliquid eum obcaecati sint velit. Est fugiat labore
          corrupti sint eaque, aut laudantium molestias dignissimos aspernatur,
          sed totam?
        </p>
      </section> */}

      {/* Leadership Team */}
      {/* <section id="leaders" className="mb-12 p-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {' '}
          Leadership Team{' '}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          voluptate neque architecto laboriosam repellendus quo nesciunt ea
          optio, tempora reiciendis, accusamus laborum accusantium beatae
          cupiditate consectetur facere, officia ipsum repellat?
        </p>
      </section> */}

      {/* Partnership with Pichayasuka */}
      <section id="partnership" className="w-full bg-brand-tertiary">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col items-center text-gray-800 gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-brand-secondary"> Our Partnership with Pichayasuka </h2>
          <div className="place-self-center relative aspect-[1750/850] w-full min-w-[200px] max-w-[650px] overflow-hidden">
            <Image
              src="/images/about/partnership.jpg"
              alt="Partnership with Pichayasuka photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 max-w-[850px]">
            <p className='text-xl'>
              On 21 Nov 24, KBH partnered with Pichayasuksa School in Thailand to offer the KBH brand of quality international education at an affordable price for everyone. KBH choose to partner with Pichayasuksa School because of the School’s outstanding academic reputation and the Founders’ shared passion for education as a force to improves lives.
            </p>
            <div className='flex justify-end'>
              <p className='text-md text-right max-w-[400px]'>The Founders of Pichayasuksa School are <strong className='font-semibold'>Dr. Thira Sutabutra</strong>, formerly Minister of Agriculture and Cooperatives, and <strong className='font-semibold'>President of Kasetsart University</strong>, and <strong className='font-semibold'>Professor Dr. Sunongnat Sutabutra</strong>, a distinguished leader in education in Thailand.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

}
