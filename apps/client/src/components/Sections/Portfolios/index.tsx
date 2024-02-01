import getPortfolios from '@client/libs/server/portfolios/getPortfolio';
import SectionHeader from '../SectionHeader';
import PortfoliosSlide from './PortfoliosSlide';
import Link from 'next/link';


export default async  function Portfolios() {
  const portfoliosData = await getPortfolios('pagination[limit]=10')
  return (
    <section id="portfolio" className="w-full my-12 py-12 md:my-16 md:py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8  px-4">
        <SectionHeader
          title="Some of the Websites We've Crafted"
          summary="Explore a curated selection of our meticulously designed websites, each a masterpiece of innovation and user-centric design"
        />
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-12">
          <PortfoliosSlide portfolios={portfoliosData.data} />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link href={'/portfolios'} className="btn btn-primary py-3 px-6">See More</Link>
        </div>
      </div>
    </section>
  );
}
