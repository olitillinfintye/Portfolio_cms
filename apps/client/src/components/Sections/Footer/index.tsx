import React from 'react';
import {
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlinePhone,
} from 'react-icons/md';

import Link from 'next/link';
import SocialLinks from '../SocialLinks';
function Footer() {
  return (
    <footer className="w-full relative  bg-background-100 dark:bg-background-900 pt-4 mt-12 text-dark-lightest dark:text-dark-lightest hover:text-dark dark:hover:text-light-darkest ease-in-out duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-8 justify-center">
        <article className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-bold">OZONE Technology</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            praesentium ipsam. Minima ullam quam libero nisi iste temporibus
            facere iure.
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 items-center">
              <MdOutlineLocationOn size={25} />
              <div className="flex flex-col">
                <address className="">Adiss Abeba, Ethiopia</address>
                <span className="font-extralight text-sm">Address</span>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <MdOutlinePhone size={25} />
              <div className="flex flex-col">
                <span className="">+251922414657</span>
                <span className="font-extralight text-sm">Mobile</span>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <MdOutlineMail size={25} />
              <div className="flex flex-col">
                <span className="">contact@ozonetech.et</span>
                <span className="font-extralight text-sm">Email</span>
              </div>
            </li>
          </ul>
        </article>
        <div className="w-full flex flex-col gap-4">
          <div className="text-2xl font-bold">Useful Links</div>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 items-center">
              <Link href={'/#home'} className="flex flex-col link-text">
                Home
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#service'} className="flex flex-col link-text">
                Service
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/portfolios'} className="flex flex-col link-text">
                Portfolio
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/blogs'} className="flex flex-col link-text">
                Blogs
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#our-team'} className="flex flex-col link-text">
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="text-2xl font-bold">Our Service</div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 items-center">
              <Link href={'/#'} className="flex flex-col link-text">
                Software Development
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#'} className="flex flex-col link-text">
                Website Development
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#'} className="flex flex-col link-text">
                Digital Marketing
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#'} className="flex flex-col link-text">
                Mobile App Development
              </Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link href={'/#'} className="flex flex-col link-text">
                Social Media Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="text-2xl font-bold">Our Social Network</div>
          <div>Stay connect with us one our social media accounts</div>
          <div className="w-fit">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="bg-light-lightest dark:bg-dark-dark w-full py-2 px-2">
        <div className="w-full max-w-lg mx-auto text-center flex justify-center items-center">
          © Ozone Technology, all rights reserved {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
