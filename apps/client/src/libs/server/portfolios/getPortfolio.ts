import { server_host } from '@client/config/host.config';
import { ImageType, PortfolioType, StrapiContent, StrapiResponse } from '@client/types';
import { notFound, redirect } from 'next/navigation';
import 'server-only';

async function getPortfolios(query?: string) {
  const url = `${server_host}/api/portfolios?populate=thumbnail&${query ?? ""}`;
  const res = await fetch(url, {
    method: 'GET',
    next: { tags: ['getPortfolios'] },
  });

  if (!res.ok) {
    if (res.status === 404) {
      return notFound();
    }
    if (res.status === 403) {
      return redirect('/forbidden');
    }
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as StrapiResponse<StrapiContent<PortfolioType & {
    thumbnail?: {
      data: StrapiContent<ImageType>
    },

  }>[]>;
  if (!data) {
    return notFound();
  }
  return data;
}

export default getPortfolios;
