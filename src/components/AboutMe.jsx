import React from 'react';
import AshleeGreenJacket from '../assets/images/AshleeGreenJacket.png'

const AboutMe = () => {
  return (
    <section className="container mx-auto pt-20">
      <div className="md:flex md:items-center">
        <img
          src={AshleeGreenJacket}
          alt="Self"
        />
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-yellow-500">Hi, my name is</p>
          <h1 className='text-3xl sm:text-6xl font-bold text-gray-800'>Ashlee Huff</h1>
          <h2 className='text-3xl sm:text-6xl font-bold text-gray-500'>I'm a Full Stack Developer.</h2>
          <p className='text-gray-500 py-4 max-w-[500px]'>
            I am a passionate web developer with experience in various web technologies such as
            HTML, CSS, JavaScript, React, and Node.js. I enjoy building responsive and intuitive
            web applications, and I am always eager to learn new technologies and expand my skill
            set.
          </p>
          <div>
            <button className='bg-yellow-500 text-white font-semibold border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-yellow-500 hover:border-yellow-500'>View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
