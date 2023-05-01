import React from 'react';
import banner from '../../../public/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-full relative' src={banner} alt="" />
            <div className='absolute top-52 ml-[500px] text-center'>
                <h2 className='bg-slate-300 py-4 px-8 text-red-700 text-4xl font-bold rounded-lg'>The Food Network</h2>
                <button className="btn bg-purple-700 mt-4 font-bold">Explore Recipes</button>
            </div>
        </div>
    );
};

export default Banner;