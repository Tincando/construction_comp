import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Parallax } from 'react-parallax';
import { Link } from 'gatsby';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/contact_form';
import FormSubmit from '../components/formsubmit';

const ContactPage = () => {
  return (
    <Layout>
      <div className="relative h-[900px] px-0 lg:px-0">
        {/* Parallax wrapper */}
        <Parallax
          strength={300}
          bgImage="https://res.cloudinary.com/ddk9fm3fn/image/upload/v1730170789/whkt70hzkis7ocudqjxq.jpg"
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
            Let's get in touch
          </h1>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl slide-in-left">
            We'd love to hear from you
          </h2>
          <p className="mt-6 text-lg leading-8 text-white slide-in-left">
            Scroll below to get in touch
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="flex-1 w-full sm:w-1/2 lg:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.125255993923!2d-79.45021892382034!3d43.70794597109961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33b8a8ebffff%3A0x48b15e377ec5ada8!2sBasic%20Caulking%20Inc!5e0!3m2!1sen!2sca!4v1731562377182!5m2!1sen!2sca"
            width="100%"
            height="700px"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex-1 w-full sm:w-1/2 lg:w-1/3">
          <div className="h-[700px] flex flex-col justify-start px-3 lg:px-10 pt-48 lg:pt-56">
            <h1 className="text-5xl sm:text-5xl font-extrabold tracking-tight slide-in-left pb-4">
              Meet Us
            </h1>
            <div
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
              class="bg-black h-2 w-24  rounded-sm"
            ></div>
            <div className="mt-6">
              <p className="text-balance mt-4 text-lg leading-8 flex items-center">
                <FaPhoneAlt className="mr-4 text-2xl" />
                +1 (416) 856 4702
              </p>
              <p className="text-balance mt-4 text-lg leading-8 flex items-center">
                <FaPhoneAlt className="mr-4 text-2xl" />
                +1 (416) 876 3995
              </p>
              <p className="text-balance mt-4 text-lg leading-8 flex items-center">
                <FaEnvelope className="mr-4 text-2xl" />
                bcaulking@gmail.com
              </p>
              <p className="text-balance mt-4 text-lg leading-8 flex items-center">
                <FaMapMarkerAlt className="mr-4 text-2xl" />
                909 Glencairn Avenue, Toronto, Ontario, M6B 2A6
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full sm:w-1/2 lg:w-1/3">
          <div className="h-[700px] bg-blue-100 flex flex-col justify-start px-10 pt-48 lg:pt-56">
            <h1 className="text-5xl sm:text-5xl font-extrabold tracking-tight slide-in-left pb-4">
              Get in touch
            </h1>
            <div
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
              class="bg-black h-2 w-24  rounded-sm"
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact Us" />;

export default ContactPage;
