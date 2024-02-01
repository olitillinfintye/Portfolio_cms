import Footer from '@client/components/Sections/Footer';
import Spinner from '@client/components/ui/Spinner';
import { server_host } from '@client/config/host.config';
import getBlogDetails from '@client/libs/server/blogs/getBlogDetails';
import formatDateTime from '@client/utils/formatDateTime';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Markdown from 'react-markdown';

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlogDetails(params.slug, { safe: false });
  if (!blog) {
    return notFound();
  }
  return (
    <main className="flex flex-col items-center justify-between bg-background-light">
      <section className="w-full">
        <Suspense
          fallback={
            <div className="w-full text-center text-lg md:text-2xl lg:text-4xl">
              <Spinner /> Loading...
            </div>
          }
        >
          <article className="w-full text-dark dark:text-light max-w-7xl mx-auto px-4 my-10 flex flex-col gap-4">
            <p>{blog?.description}</p>
            <div className="flex justify-between items-center">
              <small className="">
                {formatDateTime(blog.publishedAt)}
              </small>
              <small className="bg-primary/10 border border-primary rounded px-2 text-primary">
                {blog.category?.name}
              </small>
            </div>
            {blog.thumbnail ? (
              <Image
                className="object-cover w-full mx-auto h-80"
                src={`${server_host}${blog.thumbnail.url}`}
                width={1600}
                height={180}
                alt={blog.slug}
              />
            ) : (
              <div className=" w-full h-56"></div>
            )}
            <h1 className="inline-block py-px mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight">
              {blog.title}
            </h1>
            <Markdown>{blog.body}</Markdown>
          </article>
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
