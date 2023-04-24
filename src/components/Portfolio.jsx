import React from 'react';
import html from '../assets/images/html.png'
import mongo from '../assets/images/mongo.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import javascript from '../assets/images/javascript.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: {html},
      demoLink: 'https://project1-demo.com',
      repoLink: 'https://github.com/yourusername/project1',
    },
    {
        title: 'Project 2',
        image: {mongo},
        demoLink: 'https://project2-demo.com',
        repoLink: 'https://github.com/yourusername/project2',
      },
      {
        title: 'Project 3',
        image: {react},
        demoLink: 'https://project3-demo.com',
        repoLink: 'https://github.com/yourusername/project3',
      },
      {
        title: 'Project 4',
        image: {tailwind},
        demoLink: 'https://project4-demo.com',
        repoLink: 'https://github.com/yourusername/project4',
      },
      {
        title: 'Project 5',
        image: {javascript},
        demoLink: 'https://project5-demo.com',
        repoLink: 'https://github.com/yourusername/project5',
      },
      {
        title: 'Project 6',
        image: {html},
        demoLink: 'https://project6-demo.com',
        repoLink: 'https://github.com/yourusername/project6',
      },
  ];

  return (
    <section className="container mx-auto p-20">
      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="rounded border border-gray-300 p-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Demo
            </a>{' '}
            |{' '}
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
