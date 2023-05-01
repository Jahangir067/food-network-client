import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chief = ({ chef }) => {
    const { name, likes, img, recipes_numbers, experience_time } = chef;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 border-2">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: <span className='text-red-600 font-bold'>{name}</span></h2>
                    <h3 className='font-semibold card-normal'>Years Of Experience: <span className='text-red-500'>{experience_time}</span></h3>

                    <h3 className='font-semibold card-normal'>Number Of Recipes: <span className='text-red-500'>{recipes_numbers}</span></h3>

                    <div className='flex items-center'>
                        <FaEye className='text-2xl text-lime-500	'></FaEye>
                        <p className='ml-3 font-bold text-green-600	'>{likes}</p>
                        <div className="justify-end">
                            <Link to="/details">
                                <button className="bg-green-700	 py-2 px-4 font-bold text-white rounded-lg">View Recipes</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Chief;