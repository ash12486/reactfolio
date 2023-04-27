import React from 'react';

const Resume = () => {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'SQL',
  ];

  return (
    <section className="h-screen container mx-auto p-24">
      <h2 className="text-xl font-bold mb-4">Resume</h2>
      <div className="mb-4">
        <a
          href="https://drive.google.com/file/d/1R6PtrEv52_-BrfVzr3XzQ9P3n3lRbq_p/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          Download my resume
        </a>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Proficiencies</h3>
        <ul className="list-disc list-inside">
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
