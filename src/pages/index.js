// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import Hero from '../components/hero';
import Card from '../components/card';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <div class="w-full bg-gray-200 pt-10 pb-10">
        <div class="max-w-7xl mx-auto bg-white p-10   shadow-md">
          <div class="w-full ">
            <h1 class="flex justify-center p-4">Recents projects</h1>
          </div>
          <div class="flex justify-center pt-4">
            <div class="md:grid md:row grid-cols-3 gap-4">
              <Card
                link="https://example.com/article1"
                title="Technology acquisitions 2021"
                description="Here are the biggest enterprise technology acquisitions of 2021 so far."
              />
              <Card
                link="https://example.com/article1"
                title="Technology acquisitions 2021"
                description="Here are the biggest enterprise technology acquisitions of 2021 so far."
              />
              <Card
                link="https://example.com/article1"
                title="Technology acquisitions 2021"
                description="Here are the biggest enterprise technology acquisitions of 2021 so far."
              />
              <Card
                link="https://example.com/article1"
                title="Technology acquisitions 2021"
                description="Here are the biggest enterprise technology acquisitions of 2021 so far."
              />
              <Card
                link="https://example.com/article1"
                title="Technology acquisitions 2021"
                description="Here are the biggest enterprise technology acquisitions of 2021 so far."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full h-auto bg-gray-700 pb-10">
        <h1 className="flex justify-center pt-10 pb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
          WHO WE ARE
        </h1>
        <div class="bg-white h-2 w-24 text-align mx-auto rounded-sm"></div>
        <div class="max-w-3xl mx-auto ">
          <p className="flex justify-center p-10 text-white ">
            We are a team of experienced professionals. Basic Caulking specializes in residential,
            commercial and industrial projects. We are dedicated to quality, details and lasting
            results. With over 20 years of experience we offer top-quality products and services.
          </p>
          <h1 className="flex justify-center pt-10 pb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            WHAT WE DO
          </h1>
          <div class="bg-white h-2 w-24 text-align mx-auto rounded-sm "></div>
          <div className="flex justify-center text-white pt-10">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
              <div className="container-sm mx-auto p-2 border-2 rounded-sm border-white">
                <p>Caulking</p>
              </div>
              <div className="container-sm mx-auto p-2 border-2 border-white">
                <p>Fire stopping</p>
              </div>
              <div className="container-sm mx-auto p-2 border-2 border-white">
                <p>Smoke seal</p>
              </div>
              <div className="container-sm mx-auto p-2 border-2 border-white">
                <p>Interior Silicone</p>
              </div>
              <div className="container-sm mx-auto p-2 border-2 border-white">
                <p>Other services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full h-auto bg-white pb-10">
        <div className="flex  md:col-1 gap-10 px-10 pt-28 justify-start">
          <div class="col w-1/2">
            <h1 className="flex pb-4 text-balance text-2xl font-bold tracking-tight  sm:text-4xl">
              WHO WE WORK WITH
            </h1>
            <div class="bg-gray-700 h-2 w-24 text-align mx-auto rounded-sm "></div>
          </div>
          <div class="col">
            <div class="max-w-3xl mx-auto ">
              <p className="flex justify-center  ">ARAGON</p>
              <p className="flex justify-center  ">GCL BUILDS</p>
              <p className="flex justify-center  ">RIISE BUILDING INC</p>
              <p className="flex justify-center  ">SKYGRID</p>
              <p className="flex justify-center  ">CHESNUT HILL DEVELOPMENTS</p>
              <p className="flex justify-center  ">SAVIC HOMES</p>
              <p className="flex justify-center  ">VANMAR CONSRUCTORS</p>
              <p className="flex justify-center  ">ZEHR GROUP</p>
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
