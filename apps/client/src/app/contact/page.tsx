import ContactForm from '@client/components/Forms/ContactForm';
import Footer from '@client/components/Sections/Footer';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <main>
      <section className="w-full max-w-7xl mx-auto  my-12 py-12 px-4 md:my-16 md:py-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:h-[610px]">
            <Image
              src="/contact/contact.png"
              alt="contact"
              width={1000}
              height={400}
              className="w-fit h-full  object-cover"
            />
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
