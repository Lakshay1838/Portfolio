import React from 'react';
import Profile from './Profile';

const Header = () => {
    return (
        <div className="border-2 text-4xl px-4 py-6 flex space-x-72">
            <div className="inline-block">Lakshay</div>
            <div className='inline-block ml-70 px-17'>
                <Profile link={'https://www.github.com/Lakshay1838'} name={'Github'}/>
                <Profile link={'https://www.linkedin.com/in/lakshay-pahuja-099a6924b/'} name={'Linkedin'}/>
                <Profile link={'https://leetcode.com/u/lakshay_pahuja/'} name={'Leetcode'}/>
                <Profile link={'https://www.geeksforgeeks.org/user/lakshaypa79tq/'} name={'GFG'}/>
                <Profile link={'https://codolio.com/profile/lakshay_pahuja'} name={'Codolio'}/>
            </div>
        </div>
    );
}

export default Header;