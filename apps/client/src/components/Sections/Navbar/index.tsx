'use client';

import { MdClose, MdMenu } from 'react-icons/md';
import ThemeIcon from './ThemeIcon';
import { useState } from 'react';
import { BiCloset } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center gap-4 px-8 lg:py-8">
        <div className="w-fit font-extrabold text-xl whitespace-nowrap">
          <Link href={'/#home'}>
            <Image
              src="/logos/logo.png"
              alt="logo"
              width={180}
              height={180}
              className="w-40 h-20 aspect-square object-cover "
            />
          </Link>
        </div>
        <ul className=" hidden lg:flex gap-8 items-center">
          <li>
            <Link href={'/#home'}>Home</Link>
          </li>
          <li>
            <Link href={'/#service'} className="">
              Service
            </Link>
          </li>
          <li>
            <Link href={'/portfolios'}>Portfolio</Link>
          </li>
          <li>
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li>
            <Link href={'/#our-team'}>Our Team</Link>
          </li>
        </ul>
        <div className="flex gap-4 py-2  items-center justify-end">
          <div className="flex gap-4 items-center">
            <div>
              <ThemeIcon />
            </div>
            <div className="lg:hidden">
              <button
                className="btn-icon"
                onClick={() => setOpen((isOpen) => !isOpen)}
              >
                {open ? <MdClose size={20} /> : <MdMenu size={20} />}
              </button>
            </div>
          </div>
          <div className="hidden lg:flex ">
            <Link href={'/contact'} className="btn btn-primary">
              Order Now
            </Link>
          </div>
        </div>
      </nav>
      <div
        style={{ height: open ? '340px' : '0px' }}
        className="w-full  px-10 lg:hidden  items-center justify-between my-4 overflow-hidden duration-200 ease-in-out"
      >
        <ul className="flex flex-col lg:flex-row gap-8">
          <li>
            <Link href={'/#home'}>Home</Link>
          </li>
          <li>
            <Link href={'/#service'} className="scroll-smooth">
              Service
            </Link>
          </li>
          <li>
            <Link href={'/portfolios'}>Portfolio</Link>
          </li>
          <li>
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li>
            <Link href={'/#our-team'}>Our Team</Link>
          </li>
          <li>
            <Link href={'/contact'} className="btn btn-primary">
              Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
