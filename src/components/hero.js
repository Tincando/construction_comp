import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <div className="relative h-[900px] px-0 lg:px-0">
      {/* Parallax wrapper */}
      <Parallax
        strength={300}
        bgImage="https://res.cloudinary.com/ddk9fm3fn/image/upload/v1729354778/brvd3n3dywubztkgszgp.jpg"
        bgImageAlt="Background image"
        bgImageStyle={{
          objectFit: 'cover', // Prevent squishing
          width: '100%', // Full width
          height: '100%', // Full height
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      >
        <div className="h-[800px]"></div> {/* This div ensures height for the parallax */}
      </Parallax>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-35 p-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white slide-in-left">
          BASIC CAULKING
        </h1>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl slide-in-left">
          With over 20 years of experience we offer top-quality products and services.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white slide-in-left">
          Specialize in residential, commercial and industrial projects.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
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
