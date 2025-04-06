import React from 'react';
import photo from '../assets/passportsize.jpg';

const Hero = () => {
    return (
        <section id='home' className="pt-33 bg-slate-100 text-gray-900 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-10">

                {/* Left: Photo + Name */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src={photo}
                        alt="passport size"
                        className="w-44 h-44 rounded-full object-cover shadow-md mb-4"
                    />
                    <h1 className="text-3xl font-bold">Lakshay Pahuja</h1>
                </div>

                {/* Right: Summary */}
                <div className="max-w-xl text-lg leading-relaxed">
                    <p>
                        Hi, myself Lakshay. A passionate software developer from Hisar, Haryana — a city known for its steel industry.
                        I completed my schooling in my hometown and moved to Chitkara University for higher studies. 
                        I'm good at problem solving, which is why I chose engineering as my career.
                        <br /><br />
                        Currently, I’m looking for better opportunities to grow and contribute.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Hero;


// import React from 'react';
// import photo from '../assets/passportsize.jpg';

// const Hero = () => {
//     return(
//         <div className='bg-slate-100 text-gray-900 py-16'>
//             <div className='px-20 py-10 inline-block border-2'>
//                 {/* photo */}
//                 <img className='border-1' src={photo} alt="passport size photo" width={171}/>
//                 <h1 className='text-3xl'>name</h1>
//             </div>
//             <div className='inline-block border-2 w-7/12 px-22 '>
//                 {/* summary */}
//                 <span>Hi Myself Lakshay. A Passionate Software Developer from Hisar Haryana which is famous for his Steel Industry I completed my schooling from my Hometown and then I moved to Chitkara University for my Higher studies I am Good at problem solving so i choose Engineering as my career.
//                     <br></br>
//                     currently Looking for the better opportunities.
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Hero;