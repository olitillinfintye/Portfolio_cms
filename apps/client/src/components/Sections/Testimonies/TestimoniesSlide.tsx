'use client';

import Slider from '@client/components/ui/Slider';
import Testimony from './Testimony';
import useMediaQuery from '@client/hooks/useMediaQuery';
import { ImageType, StrapiContent, TestimonyType } from '@client/types';
export default function TestimoniesSlide({
  testimonies,
}: {
  testimonies: StrapiContent<
    TestimonyType & {
      avatar?:
        | {
            data: StrapiContent<ImageType>;
          }
        | undefined;
    }
  >[];
}) {
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  return (
    <Slider
      navigator={true}
      gapBetween="0.5rem"
      showItem={isLg ? 3 : isMd ? 2 : 1}
      className="basis-full md:basis-1/2 lg:basis-1/3 min-h-full"
    >
      {testimonies.map((testimony, ind) => (
        <Testimony testimony={testimony.attributes} key={ind} />
      ))}
    </Slider>
  );
}
