import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ImageHero from '../components/image_hero';
import { FaHandshake } from 'react-icons/fa';
import { MdThumbUpAlt } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { Link } from 'gatsby';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <ImageHero
        title="About Us"
        text="At Basic Caulking, we bring over 25 years of expertise to residential, commercial, and industrial caulking projects. Our commitment to precision, quality, and lasting results has established us as a trusted name in Toronto and the surrounding areas."
        image="/about_hero.jpg"
        fallbackImage="/default_hero.jpg" // Optional fallback image
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
        <h1
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="flex justify-center pt-10 pb-4 text-balance text-4xl font-bold tracking-tight text-black sm:text-6xl"
        >
          WHAT WE DO
        </h1>
        <p
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="text-lg text-gray-700 "
        >
          We specialize in a wide range of services, including:
        </p>
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="bg-white h-2 w-24 text-align mx-auto rounded-sm"
        ></div>
        <div className="flex justify-center text-black pt-10">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <div
              data-sal="slide-down"
              data-sal-delay="200"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 rounded-sm border-black"
            >
              <p>Caulking</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="300"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-black"
            >
              <p>Fire stopping</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="400"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-black"
            >
              <p>Smoke seal</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="500"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-black"
            >
              <p>Interior Silicone</p>
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="600"
              data-sal-easing="ease"
              className="container-sm mx-auto p-2 border-2 border-black"
            >
              <p>Other services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-36">
        <h1 className="text-4xl font-bold text-white">OUR CORE VALUES:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
          <div
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="relative group overflow-hidden"
          >
            <GiAchievement className="text-white text-6xl mx-auto" />
            <h2 className="text-2xl font-bold text-white mt-4">Commitment to Excellence</h2>
            <p className="text-lg text-white mt-2">
              We believe that excellence is a habit, not an act. Every project we undertake is
              guided by a dedication to precision and quality. From the materials we choose to the
              methods we employ, our goal is to exceed industry standards and set new benchmarks in
              craftsmanship.
            </p>
          </div>
          <div
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease"
            className="relative group overflow-hidden"
          >
            <MdThumbUpAlt className="text-white text-6xl mx-auto" />
            <h2 className="text-2xl font-bold text-white mt-4">Customer Satisfaction</h2>
            <p className="text-lg text-white mt-2">
              Our clients are at the heart of everything we do. We pride ourselves on fostering
              strong relationships by listening to their needs, keeping open lines of communication,
              and delivering results that go beyond expectations.
            </p>
          </div>
          <div
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-easing="ease"
            className="relative group overflow-hidden"
          >
            <FaHandshake className="text-white text-6xl mx-auto" />
            <h2 className="text-2xl font-bold text-white mt-4">Integrity and Transparency</h2>
            <p className="text-lg text-white mt-2">
              Trust is the foundation of our business. We operate with honesty and integrity,
              ensuring our clients are informed at every stage of the process. From accurate project
              estimates to clear timelines and dependable outcomes, we believe in building
              confidence through transparency. Our clients can count on us to deliver what we
              promise, every time.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="container mx-auto text-center">
          <ImageHero
            title="Meet the Professionals"
            text="Our commitment to excellence starts with our team."
            image="/worker.jpg"
          />
        </div>
        <div className="container mx-auto text-center my-10 flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 pb-4">Our Team</h1>
            <h2 className="text-2xl font-semibold text-gray-600 pb-4">
              With a shared passion for quality craftsmanship and client satisfaction, our team is
              dedicated to delivering exceptional results in every project. Combining years of
              experience and a meticulous attention to detail, we have built a reputation for
              excellence and innovation. Our leadership emphasizes transparency, integrity, and a
              commitment to continuous improvement, fostering a culture that values precision and
              client trust in all aspects of our work.
            </h2>
            <Link
              to="/contact"
              className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Us" />;
// Step 3: Export your component
export default AboutPage;
