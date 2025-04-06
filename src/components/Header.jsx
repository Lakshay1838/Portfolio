import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-gray-900 text-white shadow-md px-4 py-4 flex justify-between items-center z-50">
            
            {/* Left: Logo */}
            <div className="text-2xl md:text-3xl font-bold tracking-wide px-4">
                Lakshay<span className="text-blue-400">Pahuja</span>
            </div>
            
            {/* Right: Nav Links */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 px-4 text-2xl">
                <a className="hover:text-blue-400 transition" href="#home">Home</a>
                <a className="hover:text-blue-400 transition" href="#about">About</a>
                <a className="hover:text-blue-400 transition" href="#skills">Skills</a>
                <a className="hover:text-blue-400 transition" href="#projects">Projects</a>
                <a className="hover:text-blue-400 transition" href="#contacts">Contacts</a>
                
                <a
                    href="/Resume_Lakshay_El_Feb.pdf"
                    download
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition shadow"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Header;
