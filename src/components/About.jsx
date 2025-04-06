// About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 inline-block border-blue-500">About Me</h2>
        <p className="text-lg leading-relaxed mt-6">
          I’m Lakshay Pahuja, a passionate software developer who loves solving real-world problems through code.
          I'm currently pursuing my B.E. in CSE from Chitkara University.
          My main interests lie in Web Development, and I enjoy working with JavaScript, React, and backend tools like Node.js.
        </p>
        <p className="mt-4 text-md text-gray-600 italic">
          Fun fact: I’m also a theatre actor and a handball goalkeeper — creativity + strategy all in one! 😄
        </p>
      </div>
    </section>
  );
};

export default About;
