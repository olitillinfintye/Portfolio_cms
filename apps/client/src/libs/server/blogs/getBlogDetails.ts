import { server_host } from '@client/config/host.config';
import { BlogType, CategoryType, ImageType, StrapiContent, StrapiResponse } from '@client/types';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import 'server-only';

export default async function getBlogDetails(
  slug: string,
  options?: { safe?: boolean, query?: string }
) {
  let headers: HeadersInit = {};

  const cookieStore = cookies();
  if (cookieStore.has('token')) {
    const token = cookieStore.get('token') as { value: string };
    headers = {
      Authorization: `Bearer ${token.value}`,
    };
  }

  const url = `${server_host}/api/blogs/${slug}?populate=thumbnail&populate=category${options?.query ?? ""}`;

  const res = await fetch(url, {
    method: 'GET',
    next: { tags: [`getBlogDetails/${slug}`] },
    headers: headers,
  });

  if (!res.ok) {
    if (options?.safe) {
      return null;
    }
    if (res.status === 404) {
      return notFound();
    }
    if (res.status === 403) {
      return redirect('/forbidden');
    }
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as (BlogType & {
    thumbnail?: ImageType,
    category?: CategoryType
  });
  if (!data) {
    return notFound();
  }

  return data;
}
