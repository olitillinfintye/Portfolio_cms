import { server_host } from '@client/config/host.config';
import {
  ImageType,
  PortfolioType,
  StrapiContent
} from '@client/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio({
  portfolio,
}: {
  portfolio: PortfolioType & {
    thumbnail?:
      | {
          data: StrapiContent<ImageType>;
        }
      | undefined;
  };
  }) {
  
  return (
    <div className="flex flex-col gap-4 p-2 rounded-2xl justify-center bg-light-light dark:bg-dark">
      <Link
        href={portfolio.link}
        target="_blank"
        className="bg-light-lightest dark:bg-dark-dark aspect-video rounded-xl w-full"
      >
        {portfolio.thumbnail?.data && (
          <Image
            src={`${server_host}${portfolio.thumbnail.data.attributes.url}`}
            alt="hero"
            width={4000}
            height={4000}
            className="w-full h-full aspect-video object-cover rounded-md"
          />
        )}
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <Link
          href={portfolio.link}
          target="_blank"
          className="text-xl font-bold"
        >
          {portfolio.title}
        </Link>
        <div className="text-sm">{portfolio.description}</div>
      </div>
    </div>
  );
}
