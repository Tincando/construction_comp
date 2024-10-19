import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <div className="relative h-[800px] px-0 lg:px-0">
      <StaticImage
        src="https://res.cloudinary.com/ddk9fm3fn/image/upload/v1729354778/brvd3n3dywubztkgszgp.jpg"
        alt="Background image"
        layout="fullWidth"
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {' '}
        {/* Centering content */}
        <h1 className="text-balance p-10 text-4xl font-bold tracking-tight text-white sm:text-6xl slide-in-left">
          With over 20 years of experience we offer top-quality products and services.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white slide-in-left">
          Basic Caulking specializes in residential, commercial and industrial projects.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-label="Contact Us"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
