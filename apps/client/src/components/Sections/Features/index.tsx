import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function Features() {
  return (
    <section  className="w-full my-12 py-12 md:my-16 md:py-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center justify-center">
        <div className="bg-primary-lightest rounded-r-3xl h-full w-[calc(100vw_-_6rem)] md:w-1/2">
          <div className="bg-light dark:bg-dark-dark  mt-8 -mr-[5rem] rounded-r-3xl flex flex-col md:flex-row items-center justify-center gap-2 md:gap-24 p-12  lg:py-36">
            <div className="w-full md:w-1/2">
              <Image
                src="/feature/feature.png"
                alt="feature"
                width={1000}
                height={400}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className="w-fill md:w-1/2 flex flex-col gap-4">
              <div className="text-2xl font-bold">Features</div>
              <ul className="flex flex-col gap-4 list-disc">
                <li className="">Advance Analytics </li>
                <li className="">User-centric Design</li>
                <li className="">Innovation-driven Approach</li>
                <li className="">Multidisciplinary Expertise</li>
                <li className="">Results-driven Orientation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-[6rem] px-4">
          <div className="flex flex-col gap-4 p-8 max-w-lg">
            <div className="text-primary">Special and good services</div>
            <div className="text-2xl md:text-4xl font-extrabold">
              Our company takes pride in delivering
            </div>
            <div className="text-sm text-dark-lightest dark:text-light-darkest">
              a range of distinctive features and value-added services that set
              us apart and provide exceptional benefits to our customers.
            </div>
            <div className="flex flex-col gap-4 my-4">
              <Link href={'/contact'} className="btn btn-primary group py-3 px-5 w-full flex items-center gap-2">
                <span>Work with us</span>
                <FaArrowRight
                  size={15}
                  className="group-hover:translate-x-1 ease-in-out duration-200"
                />
              </Link>
              <Link href={'/portfolios'} className="btn btn-light group py-3 px-5 w-full flex items-center gap-2">
                <span>Portfolio</span>
                <FaArrowDown
                  size={15}
                  className="group-hover:translate-y-1 ease-in-out duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
