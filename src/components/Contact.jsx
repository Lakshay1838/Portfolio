import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contacts" className="bg-slate-100 py-16 text-center">
      <h2 className="text-3xl font-bold underline mb-8">Contact Me</h2>

      <p className="text-lg mb-6">
        Interested in collaborating or just want to say hi? Let’s connect!
      </p>

      <a
        href="mailto:lakshaypahuja777@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
      >
        Send Email
      </a>

      <div className="mt-8 text-gray-600">
        <p>📍 Hisar, Haryana</p>
        <p>📞 +91-9817156085</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center mt-10 gap-6 text-3xl text-gray-700">
        <a href="https://www.linkedin.com/in/lakshay-pahuja-099a6924b/" target="_blank" rel="noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Lakshay1838" target="_blank" rel="noreferrer" className="hover:text-black">
          <FaGithub />
        </a>
        <a href="https://codolio.com/profile/lakshay_pahuja" target="_blank" rel="noreferrer" className="hover:text-green-600">
          <FaCode />
        </a>
        <a href="https://leetcode.com/lakshay_pahuja" target="_blank" rel="noreferrer" className="hover:text-orange-500">
          <SiLeetcode />
        </a>
        <a href="https://www.geeksforgeeks.org/user/lakshaypa79tq/" target="_blank" rel="noreferrer" className="hover:text-green-700">
          <SiGeeksforgeeks />
        </a>
      </div>
    </section>
  );
};

export default Contact;
