import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Lakshay Pahuja. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
