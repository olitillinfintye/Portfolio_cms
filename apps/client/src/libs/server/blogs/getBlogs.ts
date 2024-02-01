import { server_host } from '@client/config/host.config';
import { BlogType, CategoryType, ImageType, StrapiContent, StrapiResponse } from '@client/types';
import { notFound, redirect } from 'next/navigation';
import 'server-only';

async function getBlogs(query?: string) {
  const url = `${server_host}/api/blogs?populate=thumbnail&populate=category&fields[0]=title&fields[1]=description&fields[2]=slug&${query ?? ""}`;
  const res = await fetch(url, {
    method: 'GET',
    next: { tags: ['getBlogs'] },
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

  const data = (await res.json()) as StrapiResponse<StrapiContent<(BlogType & {
    thumbnail?: {
      data: StrapiContent<ImageType>
    },
    category?: {
      data: StrapiContent<CategoryType>
    }
  })>[]>
  if (!data) {
    return notFound();
  }
  return data;
}

export default getBlogs;
