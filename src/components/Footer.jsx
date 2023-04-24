import React from 'react';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'


const Footer = () => {
  return (
    <footer className="bottom-0 w-full md:flex bg-gray-800 text-white p-4">
      <div className="container text-center">
        <p className="mb-4">Find me on:</p>
        <ul className="flex justify-center text-center">
          <li className='w-[100px] h-[60px] bg-[#333333] flex items-center'>
            <a
              href="https://github.com/ash12486"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </li>
          <li className='w-[100px] h-[60px] bg-blue-600 flex items-center'>
            <a
              href="https://www.linkedin.com/in/ashlee-huff-45446338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
            <FaLinkedinIn size={20} />
              LinkedIn
            </a>
          </li>
          <li className='w-[100px] h-[60px] bg-[#6fc2b0] flex items-center'>
            <a
              href="mailto:huff.n.ashlee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
            <HiOutlineMail size={20} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
