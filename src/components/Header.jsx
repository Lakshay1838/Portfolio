import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
            <div className="flex justify-between items-center px-6 py-4">
                {/* Left: Logo */}
                <div className="text-2xl md:text-3xl font-bold tracking-wide">
                    Lakshay<span className="text-blue-400">Pahuja</span>
                </div>

                {/* Right: Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-lg">
                    <a href="#home" className="hover:text-blue-400">Home</a>
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#skills" className="hover:text-blue-400">Skills</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contacts" className="hover:text-blue-400">Contacts</a>
                    <a
                        href="https://drive.google.com/file/d/1TfUsAsEoxlp_G2Q4si2CA1c0mcNHJ1dy/view"
                        target='_blank'
                        download
                        className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition shadow"
                    >
                        Download Resume
                    </a>
                </nav>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4 text-lg">
                    <a href="#home" className="hover:text-blue-400" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="hover:text-blue-400" onClick={toggleMenu}>About</a>
                    <a href="#skills" className="hover:text-blue-400" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="hover:text-blue-400" onClick={toggleMenu}>Projects</a>
                    <a href="#contacts" className="hover:text-blue-400" onClick={toggleMenu}>Contacts</a>
                    <a
                        href="/Resume_Lakshay_El_Feb.pdf"
                        download
                        className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition shadow text-center"
                        onClick={toggleMenu}
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;

// import React from 'react';

// const Header = () => {
//     return (
//         <div className="fixed top-0 w-full bg-gray-900 text-white shadow-md px-4 py-4 flex justify-between items-center z-50">
            
//             {/* Left: Logo */}
//             <div className="text-2xl md:text-3xl font-bold tracking-wide px-4">
//                 Lakshay<span className="text-blue-400">Pahuja</span>
//             </div>
            
//             {/* Right: Nav Links */}
//             <div className="flex flex-wrap items-center gap-4 md:gap-6 px-4 text-2xl">
//                 <a className="hover:text-blue-400 transition" href="#home">Home</a>
//                 <a className="hover:text-blue-400 transition" href="#about">About</a>
//                 <a className="hover:text-blue-400 transition" href="#skills">Skills</a>
//                 <a className="hover:text-blue-400 transition" href="#projects">Projects</a>
//                 <a className="hover:text-blue-400 transition" href="#contacts">Contacts</a>
                
//                 <a
//                     href="/Resume_Lakshay_El_Feb.pdf"
//                     download
//                     className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition shadow"
//                 >
//                     Download Resume
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Header;
