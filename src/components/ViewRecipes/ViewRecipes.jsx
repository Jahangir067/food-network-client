import React, { useState } from 'react';
import { FaEye, FaRegStar, FaRegThumbsUp, FaStar, FaVoteYea } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// View recipe page

const ViewRecipes = () => {
    const [favourite, setFavourite] = useState(true)
    const [favsecond, setFavsecond] = useState(true)
    const [favthird, setFavthird] = useState(true)
    const details = useLoaderData();
    const { img, name, description, experience_time, recipes_numbers, likes, thumble1,
        thumble2, thumble3, rating1, rating2, rating3, title1, title2, views, title3, gradient1, gradient2, gradient3, method1, method2, method3
    } = details;

    const toastify1 = event => {
        toast("Favourite This Items");
        setFavourite(event.target.checked)
    }

    const toastify2 = event => {
        toast("Favourite This Items")
        setFavsecond(event.target.checked)
    }

    const toastify3 = event => {
        toast("Favourite This Items")
        setFavthird(event.target.checked)
    }

    return (
        <div className='mx-4'>
            <div className='md:mx-10 border-2 my-6 p-4 md:py-8 rounded-xl shadow-lg'>
                <div className=' md:flex items-center gap-5  '>
                    <img className='h-[320px] rounded-lg' src={img} alt="" />
                    <ToastContainer></ToastContainer>
                    <div>
                        <h2 className='font-bold text-2xl'>Name: <span className='text-red-500'>{name}</span></h2>

                        <p className='font-semibold font-xl my-2'>Experience: <span className='text-green-600'>{experience_time}</span></p>
                        <p className='font-semibold font-xl'>Recipes Number: <span className='text-green-500'>{recipes_numbers}</span></p>
                        <p className='mt-2 font-semibold flex items-center'>Likes: <span className='text-green-500 flex items-center ml-2'>
                            <FaRegThumbsUp className='text-green-500 mr-2'></FaRegThumbsUp>
                            {likes}</span></p>
                        <p className='font-semibold mt-2'><span className='font-bold text-green-600'>Description:</span> {description}</p>

                    </div>
                </div>


                {/* recipes items */}
                <div className='md:flex mt-10 md:ml-4'>

                    <div className='border-2 p-3 md:w-96 rounded'>
                        <img className='md:h-60' src={thumble1} alt="" />
                        <h2 className='font-bold text-red-500 mt-2'>{title1}</h2>

                        <p className='mt-2 font-semibold'>Rating: <Rating
                            placeholderRating={rating1}
                            readonly
                            emptySymbol={<FaRegStar className='mt-1'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-orange-400 mt-1'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        </p>

                        <p className='my-2'><span className='font-bold text-purple-600 mr-3'>Gradients:</span>{gradient1}</p>

                        <p><span className='font-bold text-purple-600 mr-3'>Methods:</span> {method1}</p>

                        <div className='text-center mt-3'>
                            <button onClick={toastify1} disabled={!favourite} className="btn btn-sm ">Favorite</button>
                        </div>
                    </div>

                    <div className='border-2 p-3 md:w-96 md:mx-4 my-4 md:my-0 rounded'>
                        <img className='md:h-60' src={thumble2} alt="" />
                        <h2 className='font-bold text-red-500 mt-2'>{title2}</h2>

                        <p className='mt-2 font-semibold'>Rating: <Rating
                            placeholderRating={rating2}
                            readonly
                            emptySymbol={<FaRegStar className='mt-1'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-orange-400 mt-1'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        </p>

                        <p className='my-2'><span className='font-bold mr-3 text-purple-600'>Gradients:</span>{gradient2}</p>
                        <p><span className='font-bold text-purple-600 mr-3'>Methods:</span> {method2}</p>
                        <div className='text-center mt-3'>
                            <button onClick={toastify2} disabled={!favsecond} className="btn btn-sm ">Favorite</button>
                        </div>
                    </div>

                    <div className='border-2 p-3 md:w-96 rounded'>
                        <img className='md:h-60' src={thumble3} alt="" />
                        <h2 className='font-bold text-red-500 mt-2'>{title3}</h2>

                        <p className='mt-2 font-semibold'>Rating: <Rating
                            placeholderRating={rating3}
                            readonly
                            emptySymbol={<FaRegStar className='mt-1'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-orange-400 mt-1'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        </p>

                        <p className='my-2'><span className='font-bold mr-3 text-purple-600'>Gradients:</span>{gradient3}</p>
                        <p><span className='font-bold text-purple-600 mr-3'>Methods:</span> {method3}</p>
                        <div className='text-center mt-3'>
                            <button onClick={toastify3} disabled={!favthird} className="btn btn-sm">Favorite</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewRecipes;