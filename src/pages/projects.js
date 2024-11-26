import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ImageHero from '../components/image_hero';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const ProjectsPage = () => {
  return (
    <Layout>
      <ImageHero
        title="PROJECTS"
        text="Discover our craftsmanship in caulking for residential, commercial, and industrial spaces. Witness how we bring seamless finishes and lasting solutions to life, delivering quality and precision to every client."
        image="/projects_img.jpg"
      />
      <div className="container mx-auto text-center my-10 pb-10">
        <h1 className="text-4xl font-bold text-gray-800 pb-4">
          Explore Basic Caulking's Latest Works
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 pb-2">
          Delivering Excellence for Every Client
        </h2>
        <div className="bg-black h-1 w-16 mx-auto rounded"></div>
        <p className="text-lg text-gray-700 py-6">
          We take pride in our craftsmanship and commitment to excellence. Our team of skilled
          professionals meticulously applies the finest caulking materials to ensure a flawless
          finish. From residential to commercial and industrial projects, we deliver exceptional
          results that leave a lasting impression on our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-1 px-4">
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://aragon.ca/wp-content/uploads/2021/12/81-Wellesley-Hero-1-scaled-1.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://images.ctfassets.net/2srwigp2rztx/6BHMMaT3JfwYhBdUwic1do/c8d3e17df13919d0ccddca0a051f03ff/a1._2G9K5KOSEOSE_s.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>

        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://shared-s3.property.ca/public/images/buildings/7865/stockyard-district-condos-2306-st-clair-ave-w-normal-1.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>

        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://precondo.ca/wp-content/uploads/2021/03/Otis-ResidencesMain1Featured.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://www.rosecorp.com/wp-content/uploads/2019/07/Residential-175-Deerfield-Road-2.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>

        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="relative group overflow-hidden"
        >
          <StaticImage
            className="w-full h-full object-cover filter blur-[0.5px] group-hover:blur-0 transition duration-300 ease-in-out"
            src="https://chestnuthilldevelopments.com/wp-content/uploads/2024/05/Universal-City-One-Exterior.jpg"
            alt="Background image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
        </div>
      </div>
      <div className="container mx-auto text-center p-10">
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us for Your Project
        </Link>
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => <Seo title="Projects" />;
