// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import Hero from '../components/hero';
import Card from '../components/card';
import { Link } from 'gatsby';

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
                className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="https://chestnuthilldevelopments.com/">
                    <StaticImage
                      src="https://chestnuthilldevelopments.com/wp-content/uploads/2024/05/Universal-City-One-Exterior.jpg"
                      alt="Background image"
                      layout="fixed"
                      width={250}
                      height={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="https://chestnuthilldevelopments.com/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Universal City Tower 1,2
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="https://chestnuthilldevelopments.com/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                data-sal="slide-down"
                data-sal-delay="400"
                data-sal-easing="ease"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="http://www.kclgroup.ca/projects/">
                    <StaticImage
                      src="https://www.rosecorp.com/wp-content/uploads/2019/07/Residential-175-Deerfield-Road-2.jpg"
                      alt="Background image"
                      layout="fixed"
                      height={250}
                      width={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="http://www.kclgroup.ca/projects/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      175 Deerfield
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="http://www.kclgroup.ca/projects/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CARD 4 */}
              <div
                data-sal="slide-down"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="https://vivedevelopment.com/project/otis-in-the-park/">
                    <StaticImage
                      src="https://precondo.ca/wp-content/uploads/2021/03/Otis-ResidencesMain1Featured.jpg"
                      alt="Background image"
                      layout="fixed"
                      height={250}
                      width={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="https://vivedevelopment.com/project/otis-in-the-park/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Otis in the Park
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="https://vivedevelopment.com/project/otis-in-the-park/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CARD 5 */}
              <div
                data-sal="slide-down"
                data-sal-delay="600"
                data-sal-easing="ease"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="https://marlinspring.com/our-communities/">
                    <StaticImage
                      src="https://shared-s3.property.ca/public/images/buildings/7865/stockyard-district-condos-2306-st-clair-ave-w-normal-1.jpg"
                      alt="Background image"
                      layout="fixed"
                      height={250}
                      width={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="https://marlinspring.com/our-communities/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      2306 St. Clair Avenue West
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="https://marlinspring.com/our-communities/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CARD 6 */}
              <div
                data-sal="slide-down"
                data-sal-delay="700"
                data-sal-easing="ease"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="https://www.zehrgroup.ca/projects/108-garment-st-tower-3">
                    <StaticImage
                      src="https://images.ctfassets.net/2srwigp2rztx/6BHMMaT3JfwYhBdUwic1do/c8d3e17df13919d0ccddca0a051f03ff/a1._2G9K5KOSEOSE_s.jpg"
                      alt="Background image"
                      layout="fixed"
                      height={250}
                      width={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="https://www.zehrgroup.ca/projects/108-garment-st-tower-3">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      108 Garment St Tower 3
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="https://www.zehrgroup.ca/projects/108-garment-st-tower-3"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                data-sal="slide-down"
                data-sal-delay="800"
                data-sal-easing="ease"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <a href="https://aragon.ca/eightyonewellesley/">
                    <StaticImage
                      src="https://aragon.ca/wp-content/uploads/2021/12/81-Wellesley-Hero-1-scaled-1.jpg"
                      alt="Background image"
                      layout="fixed"
                      height={250}
                      width={250}
                    />
                  </a>
                </div>
                <div className="p-5">
                  <a href="https://aragon.ca/eightyonewellesley/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Eighty One Wellesley
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <a
                    href="https://aragon.ca/eightyonewellesley/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
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
            results. With over 20 years of experience we offer top-quality products and services.
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

      <div className="mx-auto w-full h-auto bg-white pb-10">
        <div className="flex flex-col md:flex-row md:text-balance px-10 pt-28 justify-start">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h1 className="flex pb-4 text-balance text-3xl sm:text-4xl font-bold tracking-tight md:text-4xl">
              WHO WE WORK WITH :
            </h1>
            <div className="bg-gray-700 h-2 w-full text-align mx-auto rounded-sm"></div>
          </div>
          <div className="w-full ">
            <div className="max-w-3xl mx-auto">
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://aragon.ca/"
              >
                ARAGON
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://gclbuilds.com/"
              >
                GCL BUILDS
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://www.riisebuilding.ca/"
              >
                RIISE BUILDING INC
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-3xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://skygrid.ca/?gclid=CjwKCAjw5MOlBhBTEiwAAJ8e1uqAOwwKHOTMRVtKPhmi-SSx0iNi1z2Ay1RAuh1MSEaF41Ly0eunRhoC8XEQAvD_BwE"
              >
                SKYGRID
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-4xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://chestnuthilldevelopments.com/"
              >
                CHESTNUT HILL DEVELOPMENTS
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-3xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://savichomes.com/"
              >
                SAVIC HOMES
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://vanmarconstructors.com/"
              >
                VANMAR CONSTRUCTORS
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://marlinspring.com/"
              >
                MARLIN SPRING DEVELOPMENTS
              </Link>
              <Link
                className="flex justify-center text-balance text-xl sm:text-2xl font-bold tracking-tight transition-transform transform hover:scale-105 mb-2"
                to="https://www.zehrgroup.ca/"
              >
                ZEHR GROUP
              </Link>
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
