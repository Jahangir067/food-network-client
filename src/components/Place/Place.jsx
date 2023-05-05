import React from 'react';
import sideimg from '../../../public/side-img.jpg'
// Place Section

const Place = () => {
    return (
        <div className='md:flex md:px-10 md:gap-20 md:my-40 mt-5 px-4'>
            <div>
                <img className='rounded-lg' src={sideimg} alt="" />

            </div>
            <div className='md:w-[50%] md:mt-10'>
                <h2 className='font-bold text-orange-500 md:my-6 mt-2 md:mt-0'>WHO WE ARE</h2>
                <h3 className='font-bold md:text-4xl md:mb-5 mb-2'>One thousand flavors in one place.</h3>
                <p className='mb-4 font-semibold'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.</p>

                <p className='font-semibold'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.</p>
            </div>
        </div>
    );
};

export default Place;