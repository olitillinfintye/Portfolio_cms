import Blogs from '@client/components/Sections/Blogs';
import Features from '@client/components/Sections/Features';
import Footer from '@client/components/Sections/Footer';
import HeroSection from '@client/components/Sections/Hero';
import OurTeams from '@client/components/Sections/OurTeams';
import Portfolio from '@client/components/Sections/Portfolios';
import Service from '@client/components/Sections/Service';
import Subscribe from '@client/components/Sections/Subscribe';
import Testimonies from '@client/components/Sections/Testimonies';
import Spinner from '@client/components/ui/Spinner';
import { Suspense } from 'react';

export default function Home() {
  
  return (
    <main id="home" className="">
      <HeroSection />
      <Service />
      <Features />
      <Suspense
        fallback={
          <div className="w-full text-center text-lg md:text-2xl lg:text-4xl">
              <Spinner /> Loading...
            </div>
        }
      >
      <Portfolio />
      </Suspense>
      <Suspense
        fallback={
          <div className="w-full text-center text-lg md:text-2xl lg:text-4xl">
              <Spinner /> Loading...
            </div>
        }
      >
      <Testimonies />
      </Suspense>
      <OurTeams />
      <Suspense
        fallback={
          <div className="w-full text-center text-lg md:text-2xl lg:text-4xl">
              <Spinner /> Loading...
            </div>
        }
      >
        <Blogs />
      </Suspense>
      <Subscribe />
      <Footer />
    </main>
  );
}
