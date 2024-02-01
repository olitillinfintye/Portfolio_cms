import Link from 'next/link';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
export default function SocialLinks() {
  return (
    <div className="w-fll max-w-4xl mx-auto flex items-center gap-2 md:gap-4 lg:gap-6 justify-center">
      <Link target="_blank" href={'https://www.facebook.com/'} className="">
        <BiLogoFacebookSquare
          size={36}
          className="text-blue-600 hover:text-blue-400"
        />
      </Link>
      <Link target="_blank" href={'https://instagram.com'} className="">
        <FaInstagram
          size={26}
          className="bg-blue-600 hover:bg-blue-400 rounded text-white dark:text-black"
        />
      </Link>
      <Link target="_blank " href={'https://et.linkedin.com/'} className="">
        <FaLinkedin size={30} className="text-blue-600 hover:text-blue-400" />
      </Link>
    </div>
  );
}
