import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="max-w-2xl md:min-w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="text-center mb-4 text-lg md:text-base">Find me on:</p>
        <ul className="flex justify-center space-x-4 md:space-x-6">
          <li>
            <a href="https://github.com/ash12486">
              <SocialIcon network="github" bgColor="white" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ashlee-huff-45446338/">
              <SocialIcon network="linkedin" fgColor="#ffffff" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AshleeHuff79359">
              <SocialIcon network="twitter" fgColor="white" bgColor="#1DA1F2" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
