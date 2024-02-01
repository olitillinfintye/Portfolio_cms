
import TestimoniesSlide from './TestimoniesSlide';

import getTestimonies from '@client/libs/server/testimonies/getTestimonies';
import Image from 'next/image';
export default async function Testimonies() {
  const testimoniesData = await getTestimonies()
  return (
    <section  className="w-full my-12 py-12 md:my-16 md:py-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center px-4 h-full">
        <div className="w-[calc(100vw_-_6rem)] md:w-1/3 bg-light dark:bg-dark-dark rounded-r-2xl">
          <div className="-mt-24 w-full py-8">
            <Image
              src="/testimonies/testimonies.png"
              alt="testimonies"
              width={1000}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 min-h-full">
          <div className="flex flex-col  gap-4 h-full">
            <div className="text-2xl font-bold mx-10">Testimonies</div>
            <TestimoniesSlide testimonies={testimoniesData.data} />
          </div>
        </div>
      </div>
    </section>
  );
}
