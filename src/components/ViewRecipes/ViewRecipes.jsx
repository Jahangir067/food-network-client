import React, { useState } from 'react';
import { FaEye, FaRegStar, FaStar, FaVoteYea } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewRecipes = () => {
    const [favourite, setFavourite] = useState(true)
    const [favsecond, setFavsecond] = useState(true)
    const [favthird, setFavthird] = useState(true)
    const details = useLoaderData();
    const { img, name, description, experience_time, recipes_numbers, likes, thumble1,
        thumble2, thumble3, rating, title1, title2, views, title3, gradient1, gradient2, gradient3
    } = details;

    const toastify1 = event =>{
        toast("Favourite This Items");
        setFavourite(event.target.checked)
    }

    const toastify2 = event => {
        toast("Favourite This Items")
        setFavsecond(event.target.checked)
    }

    const toastify3 = event =>{
        toast("Favourite This Items")
        setFavthird(event.target.checked)
    }

    return (
        <div className='mx-10 border-2 my-6 p-4 py-8 flex items-center gap-5 shadow-lg rounded-xl'>
            <img className='h-[320px] rounded-lg' src={img} alt="" />
            <ToastContainer></ToastContainer>
            <div>
                <h2 className='font-bold text-2xl'>Name: <span className='text-red-500'>{name}</span></h2>

                <p className='font-semibold font-xl my-2'>Experience: <span className='text-green-600'>{experience_time}</span></p>
                <p className='font-semibold font-xl'>Recipes Number: <span className='text-green-500'>{recipes_numbers}</span></p>
                <p className='mt-2 font-semibold'>Likes: <span className='text-green-500'>{likes}</span></p>

                <p className='mt-2 font-semibold'>Rating: <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar className='mt-1'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-orange-400 mt-1'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />
                </p>
                <p className='font-semibold mt-2'>{description}</p>
                <div className='flex mt-5'>
                    <div className='border-2 p-3 w-48'>
                        <img src={thumble1} alt="" />
                        <h2 className='font-bold text-red-500'>{title1}</h2>
                        <ul>
                            <li className='text-green-500 font-semibold'>{gradient1}</li>
                            <li className='text-green-500 font-semibold'>{gradient2}</li>
                            <li className='text-green-500 font-semibold'>{gradient3}</li>
                        </ul>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center text-purple-600 font-semibold'>
                                <FaEye className='mr-2'></FaEye>
                                <span>{views}</span>
                            </p>
                            <button onClick={toastify1} disabled={!favourite} className="btn btn-sm ">Favorite</button>
                        </div>
                    </div>
                    <div className='border-2 p-3 w-48 mx-4'>
                        <img src={thumble2} alt="" />
                        <h2 className='font-bold text-red-500'>{title2}</h2>
                        <ul>
                            <li className='text-green-500 font-semibold'>{gradient1}</li>
                            <li className='text-green-500 font-semibold'>{gradient2}</li>
                            <li className='text-green-500 font-semibold'>{gradient3}</li>
                        </ul>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center text-purple-600 font-semibold'>
                                <FaEye className='mr-2'></FaEye>
                                <span>{views}</span>
                            </p>
                            <button onClick={toastify2} disabled={!favsecond} className="btn btn-sm ">Favorite</button>
                        </div>
                    </div>
                    <div className='border-2 p-3 w-56'>
                        <img src={thumble3} alt="" />
                        <h2 className='font-bold text-red-500'>{title3}</h2>
                        <ul>
                            <li className='text-green-500 font-semibold'>{gradient1}</li>
                            <li className='text-green-500 font-semibold'>{gradient2}</li>
                            <li className='text-green-500 font-semibold'>{gradient3}</li>
                        </ul>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center text-purple-600 font-semibold'>
                                <FaEye className='mr-2'></FaEye>
                                <span>{views}</span>
                            </p>
                            <button onClick={toastify3} disabled={!favthird} className="btn btn-sm">Favorite</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewRecipes;