// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import Hero from '../components/hero';
import Card from '../components/card';
import { Link } from 'gatsby';
import ContactForm from '../components/contact_form';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      {/* Recent Projects */}
      <div class="w-full bg-gray-200 pt-10 pb-10">
        <div class="max-w-7xl mx-auto bg-white p-10   shadow-md">
          <div class="w-full ">
            <h1 class="flex justify-center p-4">Projects Recently Completed</h1>
            <div class="bg-black h-2 w-24 text-align mx-auto rounded-sm"></div>
          </div>

          {/* Cards */}
          {/* CARD 1 */}
          <div class="flex justify-center pt-4">
            <div class="grid md:grid-cols-3 sm:grid-cols-1  gap-4 pt-4 ">
              <div
                data-sal="slide-down"
                data-sal-delay="300"
                data-sal-easing="ease"
                className=" hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <StaticImage
                    src="https://chestnuthilldevelopments.com/wp-content/uploads/2024/05/Universal-City-One-Exterior.jpg"
                    alt="Background image"
                    layout="fixed"
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* CARD 3 */}
              <div
                data-sal="slide-down"
                data-sal-delay="400"
                data-sal-easing="ease"
                className=" hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <StaticImage
                    src="https://www.rosecorp.com/wp-content/uploads/2019/07/Residential-175-Deerfield-Road-2.jpg"
                    alt="Background image"
                    layout="fixed"
                    height={250}
                    width={250}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* CARD 4 */}
              <div
                data-sal="slide-down"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <StaticImage
                    src="https://precondo.ca/wp-content/uploads/2021/03/Otis-ResidencesMain1Featured.jpg"
                    alt="Background image"
                    layout="fixed"
                    height={250}
                    width={250}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* CARD 5 */}
              <div
                data-sal="slide-down"
                data-sal-delay="600"
                data-sal-easing="ease"
                className=" hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <StaticImage
                    src="https://shared-s3.property.ca/public/images/buildings/7865/stockyard-district-condos-2306-st-clair-ave-w-normal-1.jpg"
                    alt="Background image"
                    layout="fixed"
                    height={250}
                    width={250}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* CARD 6 */}
              <div
                data-sal="slide-down"
                data-sal-delay="700"
                data-sal-easing="ease"
                className=" hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <StaticImage
                    src="https://images.ctfassets.net/2srwigp2rztx/6BHMMaT3JfwYhBdUwic1do/c8d3e17df13919d0ccddca0a051f03ff/a1._2G9K5KOSEOSE_s.jpg"
                    alt="Background image"
                    layout="fixed"
                    height={250}
                    width={250}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* CARD 2 */}
              <div
                data-sal="slide-down"
                data-sal-delay="800"
                data-sal-easing="ease"
                className="hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center  ">
                  <StaticImage
                    src="https://aragon.ca/wp-content/uploads/2021/12/81-Wellesley-Hero-1-scaled-1.jpg"
                    alt="Background image"
                    layout="fixed"
                    height={250}
                    width={250}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          class="bg-white h-2 w-24 text-align mx-auto rounded-sm"
        ></div>
        <div class="max-w-3xl mx-auto ">
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease"
            className="flex justify-center p-10 text-white "
          >
            We are a team of experienced professionals. Basic Caulking specializes in residential,
            commercial and industrial projects. We are dedicated to quality, details and lasting
            results. With over 25 years of experience we offer top-quality products and services.
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
            class="bg-white h-2 w-24 text-align mx-auto rounded-sm "
          ></div>
          <div className="flex justify-center text-white pt-10">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
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
      <div className="divider pt-10 bg-gray-200   "></div>

      {/* Step 4: Add the contact form <ContactForm />  */}
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

        <div className="flex-1 w-full sm:w-1/2 lg:w-1/3 ">
          <div className="h-[700px] flex flex-col justify-start px-3 lg:px-10 pt-48 lg:pt-56">
            <h1 className="text-5xl sm:text-5xl font-extrabold tracking-tight slide-in-left pb-4 ">
              Let's Talk
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
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;
// Step 3: Export your component
export default IndexPage;
