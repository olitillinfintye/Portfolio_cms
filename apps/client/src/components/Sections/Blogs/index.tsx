import getBlogs from '@client/libs/server/blogs/getBlogs';
import Blog from './Blog';
import Link from 'next/link';

export default async function Blogs() {
  const blogsData = await getBlogs('pagination[limit]=6');

  return (
    <section className="w-full my-12 py-12 md:my-16 md:py-16 relative">
      <div className="absolute bg-primary inset-x-0 inset-1/2 top-0 -z-10 py-24"></div>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 items-center justify-center text-center py-24">
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-lightest">
          Latest Blogs
        </div>
        <div className="flex gap-4">
          <span className="py-1 px-2 bg-light-lightest rounded-r-full rounded-l-full" />
          <span className="py-1 px-10 bg-light-lightest rounded-r-full rounded-l-full" />
          <span className="py-1 px-2 bg-light-lightest rounded-r-full rounded-l-full" />
        </div>
      </div>
      <div className="relative w-[calc(100vw_-_4rem)] max-w-6xl max-h-full mx-auto bg-light-lightest dark:bg-dark-dark rounded-2xl p-8">
        <div className="w-full grid grid-cols-12 gap-4">
          {blogsData.data.map((blog, ind) => (
            <div key={ind} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Blog blog={blog.attributes} id={blog.id} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-b from-light-light/0 dark:from-dark-dark/0 to-light-lightest dark:to-dark-dark py-8 rounded-b-2xl">
          <div className="flex justify-center items-center mt-8">
            <Link href={'/blogs'} className="btn btn-primary py-3 px-6">See More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
