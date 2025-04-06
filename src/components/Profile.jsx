import React from 'react';

const Profile = (props) => {
    return (
        <div className='inline-block mx-2'>
            <a href={props.link} target='_blank'>{props.name}</a>
        </div>
    );
}

export default Profile;