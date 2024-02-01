import React from 'react';
import SectionHeader from '../SectionHeader';
import Team from './Team';
import { TeamType } from '@client/types';

const teams: TeamType[] = [
  { fillName: 'Mikiyas Godana', occupation: 'CEO', image: '/teams/miki.jpg' },
  { fillName: 'Harun Jeylan', occupation: 'CTO', image: '/teams/harun.jpeg' },
  { fillName: 'Oliyad Tesfaye', occupation: 'COO', image: '/teams/harun.jpeg' },
];

export default function OurTeams() {
  return (
    <section id="our-team" className="w-full my-12 py-12 md:my-16 md:py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8  px-4">
        <SectionHeader
          title="Meet Our Exceptional Team"
          summary="Get to know the passionate individuals behind our success. Our dedicated team members bring expertise, creativity, and dedication to every project"
        />
        <div className="w-full grid grid-cols-12 gap-4 md:gap-10">
          {teams.map((team, ind) => (
            <div key={ind} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Team team={team} />
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center items-center">
          <button className="btn btn-primary py-3 px-6">See More</button>
        </div> */}
      </div>
    </section>
  );
}
