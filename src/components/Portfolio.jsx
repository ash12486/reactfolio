import React from 'react';
import html from '../assets/images/html.png'
import mongo from '../assets/images/mongo.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import javascript from '../assets/images/javascript.png'
import css from '../assets/images/css.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Break Sweat',
      image: html,
      demoLink: 'https://intense-everglades-85455.herokuapp.com/',
      repoLink: 'https://github.com/decourtney/break-sweat',
    },
    {
        title: 'Socialite API',
        image: mongo,
        demoLink: 'https://drive.google.com/file/d/19MMLR398k_y-Iw2uH27DJHgH0WAHgLcD/view',
        repoLink: 'https://github.com/ash12486/SocialiteAPI',
      },
      {
        title: 'RealityCheck',
        image: react,
        demoLink: 'https://sleepy-brushlands-04075.herokuapp.com/',
        repoLink: 'https://github.com/yourusername/project3',
      },
      {
        title: 'Not Another Movie Generator',
        image: tailwind,
        demoLink: 'https://chriseligirard.github.io/movienightGame/',
        repoLink: 'https://github.com/ChrisEliGirard/movienightGame',
      },
      {
        title: 'javascriptQuiz',
        image: javascript,
        demoLink: 'https://ash12486.github.io/javascriptQuiz/',
        repoLink: 'https://github.com/ash12486/javascriptQuiz',
      },
      {
        title: 'employeeShowcase',
        image: css,
        demoLink: 'https://ash12486.github.io/employeeShowcase/',
        repoLink: 'https://github.com/ash12486/employeeShowcase',
      },
  ];

  return (
    <div className='bg-white'>
    <section className= "container mx-auto p-[100px]">
      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card-container">
          <div className="rounded border border-gray-300 p-4 project-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain mb-4 rounded"
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
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Portfolio;
