import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className='w-full px-8 '>
      <div className="w-full max-w-7xl mx-auto  bg-light dark:bg-dark-dark px-4 py-4 md:px-8 md:py-24 rounded-3xl drop-shadow-2xl">
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4 lg:gap-8">
          <div className="w-full md:max-w-1/2 flex flex-col gap-4 justify-center">
            <div className="text-primary">
              We Are here to transform ideas in to digital reality.
            </div>
            <div className="text-xl md:text-2xl lg:text-5xl font-extrabold">
              Unlocking Your Potential with Tailored Tech Development
            </div>
            <div className="text-sm lg:text-lg text-dark dark:text-light w-full md:w-1/2">
              We prioritize delivering high-quality solutions that help our
              clients improve their business performance
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 my-4">
              <Link href={'/contact'} className="btn btn-primary group py-3 px-5 w-full md:w-fit flex items-center gap-2">
                <span>Work with us</span>
                <FaArrowRight
                  size={15}
                  className="group-hover:translate-x-1 ease-in-out duration-200"
                />
              </Link>
              <Link href={'/#service'}  className="btn btn-light bg-light-lightest group py-3 px-5 w-full md:w-fit flex items-center gap-2">
                <span>Learn More</span>
                <FaArrowDown
                  size={15}
                  className="group-hover:translate-y-1 ease-in-out duration-200"
                />
              </Link>
            </div>
          </div>
          <div className="w-full md:max-w-1/2">
            <Image
              src="/hero/hero.png"
              alt="hero"
              width={1000}
              height={400}
              className="w-full h-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
