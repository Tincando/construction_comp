import React from 'react';
import Layout from './layout';

const ProjectCard = ({ imageSrc, altText, delay }) => (
  <div
    data-sal="slide-down"
    data-sal-delay={delay}
    data-sal-easing="ease"
    className="hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div className="w-[250px] h-[250px] overflow-hidden rounded-lg flex items-center justify-center">
      <img
        src={imageSrc}
        alt={altText}
        width={250}
        height={250}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
);

const RecentProjects = () => {
  const projects = [
    {
      imageSrc:
        'https://chestnuthilldevelopments.com/wp-content/uploads/2024/05/Universal-City-One-Exterior.jpg',
      altText: 'Project 1',
      delay: 300,
    },
    {
      imageSrc:
        'https://www.rosecorp.com/wp-content/uploads/2019/07/Residential-175-Deerfield-Road-2.jpg',
      altText: 'Project 2',
      delay: 400,

      className: 'rounded-lg',
    },
    {
      imageSrc: 'https://precondo.ca/wp-content/uploads/2021/03/Otis-ResidencesMain1Featured.jpg',
      altText: 'Project 3',
      delay: 500,

      className: 'rounded-lg',
    },
    {
      imageSrc:
        'https://shared-s3.property.ca/public/images/buildings/7865/stockyard-district-condos-2306-st-clair-ave-w-normal-1.jpg',
      altText: 'Project 4',
      delay: 600,

      className: 'rounded-lg',
    },
    {
      imageSrc:
        'https://images.ctfassets.net/2srwigp2rztx/6BHMMaT3JfwYhBdUwic1do/c8d3e17df13919d0ccddca0a051f03ff/a1._2G9K5KOSEOSE_s.jpg',
      altText: 'Project 5',
      delay: 700,

      className: 'rounded-lg',
    },
    {
      imageSrc: 'https://aragon.ca/wp-content/uploads/2021/12/81-Wellesley-Hero-1-scaled-1.jpg',
      altText: 'Project 6',
      delay: 800,

      className: 'rounded-lg ',
    },
  ];

  return (
    <section className="w-full bg-gray-200 pt-10 pb-10">
      <div className="max-w-7xl mx-auto bg-white p-10 shadow-md">
        <h1 className="flex justify-center p-4">Projects Recently Completed</h1>
        <div className="bg-black h-2 w-24 text-align mx-auto rounded-sm"></div>
        <div className="flex justify-center pt-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 pt-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                altText={project.altText}
                delay={project.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
