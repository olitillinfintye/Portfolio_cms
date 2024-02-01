import { server_host } from '@client/config/host.config';
import {
  BlogType,
  CategoryType,
  ImageType,
  StrapiContent,
} from '@client/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Blog({
  blog,
  id,
}: {
  blog: BlogType & {
    thumbnail?: {
      data: StrapiContent<ImageType>;
    };
    category?: {
      data: StrapiContent<CategoryType>;
    };
  };
  id: number;
}) {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-2xl justify-center bg-light-light dark:bg-dark">
      <Link
        href={`/blogs/${blog.slug}`}
        className="bg-light-lightest dark:bg-dark-dark aspect-video rounded-xl w-full"
      >
        {blog.thumbnail?.data && (
          <Image
            src={`${server_host}${blog.thumbnail?.data.attributes.url}`}
            alt="hero"
            width={4000}
            height={4000}
            className="w-full h-full aspect-video object-cover rounded-md"
          />
        )}
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <Link
          href={`/blogs/${blog.slug}`}
          className="text-xl font-bold"
        >
          {blog.title}
        </Link>
        <div className="text-sm">{blog.description}</div>
      </div>
    </div>
  );
}
