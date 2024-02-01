import { server_host } from '@client/config/host.config';
import { ImageType, StrapiContent, StrapiResponse, TestimonyType } from '@client/types';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import 'server-only';

async function getTestimonies() {
 
  const url = `${server_host}/api/testimonies?populate=avatar`;
  const res = await fetch(url, {
    method: 'GET',
    next: { tags: ['getTestimonies'] },
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

  const data = (await res.json()) as StrapiResponse<StrapiContent<TestimonyType & {
    avatar?: {
      data: StrapiContent<ImageType>
    },
  }>[]>
  if (!data) {
    return notFound();
  }
  
  return data;
}

export default getTestimonies;
