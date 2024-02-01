import { TeamType } from '@client/types';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Team({ team }: { team: TeamType }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-6 md:p-12 items-center justify-center">
      <div className="bg-light dark:bg-dark-dark aspect-square rounded-full w-2/3 p-2">
        {team.image && (
          <Image
            src={team.image}
            alt="service"
            width={1000}
            height={400}
            className="w-full h-full aspect-square rounded-full"
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-nowrap gap-1 md:text-md lg:text-xl">
          <span>{team.fillName}</span>|
          <span className="text-secondary">{team.occupation}</span>
        </div>
        <div className="flex flex-nowrap gap-4 md:gap-6 items-center justify-center">
          <button className="btn-icon">
            <FaLinkedin size={20} className="text-secondary" />
          </button>
          <button className="btn-icon">
            <FaInstagram size={20} className="text-secondary" />
          </button>
          <button className="btn-icon">
            <FaGithub size={20} className="text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
}
