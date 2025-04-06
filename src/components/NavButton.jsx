import React from 'react';

const NavButton = (props) => {
    return (
        <div className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl'>
            <a href = '#{home}'>Home</a>
        </div>
    );
};

export default NavButton;