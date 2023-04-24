import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center p-4 pt-20">
      <form
        action="https://getform.io/f/a71ead77-8361-482f-aadf-faf72ebee6d9"
        method="POST"
        className='flex flex-col max-w-[600px] w-full'
      >
      <div className="pb-8">
        <p className="text-gray-500 text-4xl font-bold inline border-b-4 border-yellow-500">Contact</p>
        <p className="text gray-300 py-4">Submit the form below or email me directly at huff.n.ashlee@gmail.com</p>
      </div>
        <input className="bg-gray-800 p-2" type="text" name="name" placeholder="Name" />
        <input className="my-4 p-2 bg-gray-800" type="email" name="email" placeholder="Email" />
        <textarea className="bg-gray-800 p-2" name="message" rows='10' placeholder="Message"></textarea>
        <button className='border-gray-800 border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-yellow-500 hover:border-yellow-500' type="submit">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
