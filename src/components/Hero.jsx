import React from 'react';
import photo from '../assets/passportsize.jpg';

const Hero = () => {
    return(
        <div className='bg-green-500'>
            <div className='px-20 py-10 inline-block border-2'>
                {/* photo */}
                <img className='border-1' src={photo} alt="passport size photo" width={171}/>
                <h1 className='text-3xl'>Lakshay</h1>
            </div>
            <div className='inline-block border-2 w-7/12 px-22 '>
                {/* summary */}
                <span>Hi Myself Lakshay. A Passionate Software Developer from Hisar Haryana which is famous for his Steel Industry I completed my schooling from my Hometown and then I moved to Chitkara University for my Higher studies I am Good at problem solving so i choose Engineering as my career.
                    <br></br>
                    currently Looking for the better opportunities.
                </span>
            </div>
        </div>
    );
};

export default Hero;