import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setEmailError(!validateEmail(currentEmail));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 pt-20">
      <form
        action="https://getform.io/f/a71ead77-8361-482f-aadf-faf72ebee6d9"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-gray-500 text-4xl font-bold inline border-b-4 border-yellow-500">
            Contact
          </p>
          <p className="text-lg font-semibold gray-300 py-4">
            Submit the form below or email me directly at
            ashleehuff.us@gmail.com
          </p>
        </div>
        <input
          className="bg-gray-800 text-white p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={`w-full p-2 border text-white bg-gray-800 ${
            emailError ? "border-red-500" : "border-gray-300"
          } rounded`}
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-gray-800 text-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="border-gray-800 border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-yellow-500 hover:border-yellow-500"
          type="submit"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
