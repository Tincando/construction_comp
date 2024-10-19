import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <div className="relative h-[800px] px-6 lg:px-8">
      <StaticImage
        src="https://github.com/Tincando/construction_comp/blob/main/src/images/Background.jpg"
        alt="Background image"
        layout="fullWidth"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      {/* Main Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            With over 20 years of experience we offer top-quality products and services.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Basic Caulking specializes in residential, commercial and industrial projects
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Link to="/contact">CONTACT US</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
