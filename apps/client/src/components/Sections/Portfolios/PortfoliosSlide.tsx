'use client'

import Slider from '@client/components/ui/Slider';
import useMediaQuery from '@client/hooks/useMediaQuery';
import { ImageType, PortfolioType, StrapiContent } from '@client/types';
import Portfolio from './Portfolio';

export default function PortfoliosSlide({portfolios}:{portfolios:StrapiContent<
  PortfolioType & {
    thumbnail?:
      | {
          data: StrapiContent<ImageType>;
        }
      | undefined;
  }
>[]}) {
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  return (
    <Slider
    navigator={true}
    gapBetween="0.5rem"
    showItem={isLg ? 3 : isMd ? 2 : 1}
    className="basis-full md:basis-1/2 lg:basis-1/3"
  >
    {portfolios.map((portfolio, ind) => (
      <Portfolio key={ind} portfolio={portfolio.attributes} />
    ))}
  </Slider>
  )
}
