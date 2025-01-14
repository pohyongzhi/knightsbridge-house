import Image from 'next/image';
export default function StudentLife() {
  return (
    <main>
      <section className="w-full bg-brand">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-col-1 md:grid-cols-2 gap-12 relative">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white">Our Campus</h2>
              <p className="pt-4 text-white">
                Knightsbridge House’s Nonthaburi campus in Thailand is located
                in the suburbs of Bangkok, offering a spacious and green
                environment. KBH will be a fully independent international
                school. While located within the premises of Pichayasuksa
                School, our school will be separated physically, with the
                management, curriculum, teaching staff, and operational
                standards adhering to international school benchmarks. The
                school is conveniently located 3km away from BTS Station (Pink
                Line) Chaeng Wattana-Pak Kret 28, which is next to Central
                ChaengWatthana, a major shopping and lifestyle hub.
              </p>
            </div>
            <div className="place-self-center relative aspect-[16/9] w-full max-w-[800px] overflow-hidden rounded-2xl">
              <Image
                src="images/home/global.jpg"
                alt="Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
