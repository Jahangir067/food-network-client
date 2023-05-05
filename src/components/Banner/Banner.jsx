import React from 'react';
import banner from '../../../public/banner4.jpg'

// banner section 

const Banner = () => {
    return (
        <div>
            <img className='w-full relative' src={banner} alt="" />
            <div className='absolute hidden md:block top-24 ml-[60px] md:top-52 md:ml-[500px] text-center'>
                <h2 className='bg-slate-300 py-1 px-2 md:py-4 md:px-8 text-red-700 md:text-4xl md:font-bold rounded-lg'>The Food Network</h2>
                
                <button className='bg-purple-600 py-1 mt-2 px-2 md:py-4 text-white md:text-2xl md:px-8 rounded-lg'>Explore Recipes</button>
            </div>
        </div>
    );
};

export default Banner;