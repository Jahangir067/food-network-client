import React from 'react';
import rightimg from '../../../public/bottoom-side-img.png'
import { Link } from 'react-router-dom';
const Joining = () => {
    return (
        <div className='grid grid-cols-2 gap-5 border shadow-2xl pb-14 pt-0 mx-10 rounded-xl'>
            <div className='mt-32 ml-20'>
                <h3 className='font-semibold text-2xl text-orange-500'>JOIN US</h3>
                <h4 className='font-bold text-6xl my-4'>Let's start sharing your awesome recipes</h4>
                <Link to="/register">
                    <button className='py-3 mt-4 px-8 bg-orange-600 font-semibold text-white rounded-lg'>Join Now</button>
                </Link>
            </div>
            <img src={rightimg} alt="" />
        </div>
    );
};

export default Joining;