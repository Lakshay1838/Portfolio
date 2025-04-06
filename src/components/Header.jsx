import React from 'react';
import Profile from './Profile';

const Header = () => {
    return (
        <div className="fixed bg-gray-900 text-white shadow-md text-4xl px-4 py-6 flex space-x-72 min-w-screen">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-wide px-4 py-2 rounded">Lakshay<span className="text-blue-400">Pahuja</span></div>
            <div className='inline-block ml-30 px-10'>

                <a className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl' href = '#home'>Home</a>
                <a className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl' href = '#about'>About</a>
                <a className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl' href = '#skills'>Skills</a>
                <a className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl' href = '#projects'>Projects</a>
                <a className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl' href = '#contacts'>Contacts</a>

                <a
                href='../../public/Resume_Lakshay_El_Feb.pdf' // replace with your actual file path
                download
                className="bg-blue-600 text-2xl text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                >
                Download Resume
                </a>

                {/* <a href = '#'></a> */}
                {/* <Profile link={'https://www.github.com/Lakshay1838'} name={'Github'}/>
                <Profile link={'https://www.linkedin.com/in/lakshay-pahuja-099a6924b/'} name={'Linkedin'}/>
                <Profile link={'https://leetcode.com/u/lakshay_pahuja/'} name={'Leetcode'}/>
                <Profile link={'https://www.geeksforgeeks.org/user/lakshaypa79tq/'} name={'GFG'}/>
                <Profile link={'https://codolio.com/profile/lakshay_pahuja'} name={'Codolio'}/> */}
            </div>
        </div>
    );
}

export default Header;