import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ContactForm = () => {
  return (
    <div className="bg-red-500 relative h-[800px] px-0 lg:px-0">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-balance p-10 text-4xl font-bold tracking-tight text-white sm:text-6xl slide-in-left">
          Contact Us
        </h1>
        <p className="mt-6 text-lg leading-8 text-white slide-in-left">Get in touch with us</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="mailto:1wXzI@example.com" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
