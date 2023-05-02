import React from 'react';
import sideimg from '../../../public/side-img.jpg'

const Place = () => {
    return (
        <div className='flex px-10 gap-20 my-40'>
            <div>
                <img className='rounded-lg' src={sideimg} alt="" />

            </div>
            <div className='w-[50%] mt-10'>
                <h2 className='font-bold text-orange-500 my-6'>WHO WE ARE</h2>
                <h3 className='font-bold text-4xl mb-5'>One thousand flavors in one place.</h3>
                <p className='mb-4 font-semibold'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.</p>

                <p className='font-semibold'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.</p>
            </div>
        </div>
    );
};

export default Place;