import Blog from '@client/components/Sections/Blogs/Blog';
import Footer from '@client/components/Sections/Footer';
import getBlogs from '@client/libs/server/blogs/getBlogs';
import React from 'react';

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <main>
      <section className="w-full max-w-7xl mx-auto  my-12 py-12 px-4 md:my-16 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
          {blogs.data.map((blog) => (
            <Blog blog={blog.attributes} id={blog.id} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
