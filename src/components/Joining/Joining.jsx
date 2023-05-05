import React from 'react';
import rightimg from '../../../public/bottoom-side-img.png'
import { Link } from 'react-router-dom';
// Joining Section
const Joining = () => {
    return (
        <div className='grid md:grid-cols-2 md:gap-5 border py-4 shadow-2xl md:pb-14 mx-4 mt-5 pt-3 pt-0 md:mx-10 rounded-xl'>
            <div className='md:mt-32 md:ml-20 text-center md:text-left'>
                <h3 className='font-semibold text-2xl text-orange-500'>JOIN US</h3>
                <h4 className='font-bold md:text-6xl my-4'>Let's start sharing your awesome recipes</h4>
                <Link to="/register">
                    <button className='md:py-3 py-1 px-3 mt-4 md:px-8 bg-orange-600 font-semibold text-white rounded-lg'>Join Now</button>
                </Link>
            </div>
            <img src={rightimg} alt="" />
        </div>
    );
};

export default Joining;