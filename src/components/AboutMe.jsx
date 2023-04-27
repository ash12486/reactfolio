import React from 'react';
import AshleeGreenJacket from '../assets/images/AshleeGreenJacket.png'

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-80 h-80 mx-auto md:mx-0 md:mr-6 overflow-hidden">
        {/**Image svg*/}
        <svg
          className=""
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        >
          <defs>
            <linearGradient id="sw-gradient-3" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop3"
                stopColor="rgba(233.442, 223.475, 223.475, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop4"
                stopColor="rgba(45, 55, 72, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
            <clipPath id="photo-clip">
              <path
                d="M16.1,-29.1C20.7,-25.3,23.9,-20.5,26.4,-15.5C28.9,-10.5,30.6,-5.2,31.1,0.2C31.5,5.7,30.6,11.5,28.6,17.3C26.6,23.2,23.5,29.3,18.6,33.1C13.6,36.9,6.8,38.4,0.4,37.7C-6,37,-11.9,34,-17.7,30.7C-23.4,27.3,-28.9,23.6,-32.3,18.4C-35.6,13.2,-36.9,6.6,-37.5,-0.4C-38.2,-7.4,-38.3,-14.8,-36,-21.8C-33.7,-28.8,-29,-35.4,-22.6,-38.1C-16.2,-40.7,-8.1,-39.4,-1.1,-37.4C5.8,-35.5,11.6,-32.8,16.1,-29.1Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
              ></path>
            </clipPath>
          </defs>
          <image
            href={AshleeGreenJacket}
            x="10"
            y="10"
            width="75%"
            height="80%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#photo-clip)"
          />
          <path
            fill="none"
            d="M16.1,-29.1C20.7,-25.3,23.9,-20.5,26.4,-15.5C28.9,-10.5,30.6,-5.2,31.1,0.2C31.5,5.7,30.6,11.5,28.6,17.3C26.6,23.2,23.5,29.3,18.6,33.1C13.6,36.9,6.8,38.4,0.4,37.7C-6,37,-11.9,34,-17.7,30.7C-23.4,27.3,-28.9,23.6,-32.3,18.4C-35.6,13.2,-36.9,6.6,-37.5,-0.4C-38.2,-7.4,-38.3,-14.8,-36,-21.8C-33.7,-28.8,-29,-35.4,-22.6,-38.1C-16.2,-40.7,-8.1,-39.4,-1.1,-37.4C5.8,-35.5,11.6,-32.8,16.1,-29.1Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="1"
            stroke="url(#sw-gradient-3)"
          ></path>{" "}
        </svg>{" "}

        </div>
        <div className="mt-6 md:mt-0">
          <p className="text-yellow-500 text-xl">Hi, my name is</p>
          <h1 className='text-3xl md:text-6xl lg:text-6xl font-bold text-gray-800'>Ashlee Huff</h1>
          <h2 className='text-2xl md:text-3xl lg:text-3xl font-bold text-gray-500'>I'm a Full Stack Developer.</h2>
          <p className='text-gray-500 py-4 md:text-lg lg:text=2xl max-w-[500px]'>
            I am a passionate web developer with experience in various web technologies such as
            HTML, CSS, JavaScript, React, and Node.js. I enjoy building responsive and intuitive
            web applications, and I am always eager to learn new technologies and expand my skill
            set.
          </p>
          <div>
            <button className='bg-yellow-500 text-white font-semibold border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-yellow-600 hover:border-yellow-600'>View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
