import React from 'react';

const AboutUs = () => {
  return (
    <div className="mx-auto w-full h-auto bg-gray-700 pb-10">
      <h1
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="flex justify-center pt-10 pb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl"
      >
        WHO WE ARE
      </h1>
      <div
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="bg-white h-2 w-24 text-align mx-auto rounded-sm"
      ></div>
      <div className="max-w-3xl mx-auto">
        <p
          data-sal="slide-right"
          data-sal-delay="400"
          data-sal-easing="ease"
          className="flex justify-center p-10 text-white"
        >
          We are a team of experienced professionals. Basic Caulking specializes in residential,
          commercial, and industrial projects. We are dedicated to quality, details, and lasting
          results. With over 25 years of experience, we offer top-quality products and services.
        </p>
        <h1
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="flex justify-center pt-10 pb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          WHAT WE DO
        </h1>
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="bg-white h-2 w-24 text-align mx-auto rounded-sm"
        ></div>
        <div className="flex justify-center text-white pt-10">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <div
              data-sal="slide-down"
              data-sal-delay="200"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 rounded-sm border-white"
            >
              <p>Caulking</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="300"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-white"
            >
              <p>Fire stopping</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="400"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-white"
            >
              <p>Smoke seal</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="500"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-white"
            >
              <p>Interior Silicone</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="600"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-white"
            >
              <p>Other services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
