import * as React from 'react';
import { Link } from 'gatsby';
import { Parallax } from 'react-parallax';

const ImageHero = ({ title, text, image }) => {
  return (
    <div className="relative h-[900px] px-0 lg:px-0">
      {/* Parallax Wrapper */}
      <Parallax
        bgImage={image}
        bgImageAlt="Background"
        bgImageStyle={{ objectFit: 'cover' }}
        className="w-full h-full"
        strength={500} // Adjust the strength of the parallax effect
      >
        <div className="relative h-[900px]">
          {/* Overlay and Main Content */}
          <div className="absolute inset-0 flex flex-col justify-center  bg-black bg-opacity-35 p-11">
            <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-white slide-in-left pb-8">
              {title}
            </h1>
            <h2 className="text-balance text-2xl font-light tracking-tight text-white sm:text-2xl slide-in-left">
              {text}
            </h2>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ImageHero;
