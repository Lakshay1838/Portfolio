import React from 'react';

const Profile = (props) => {
    return (
        <div className='inline-block text-white hover:text-blue-400 transition duration-200 px-4 py-2 text-2xl'>
            <a href= {props.link} target='_blank'>{props.name}</a>
        </div>
    );
}

export default Profile;