import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chief from '../Chief/Chief';
import Place from '../Place/Place';
import Joining from '../Joining/Joining';

const Recipies = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://the-food-network-server-noornabi07.vercel.app/recipies')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className='md:w-[700px] mx-auto text-center px-4'>
                <h2 className='md:text-3xl font-bold md:mt-10 mt-3 text-orange-600 text-center'>Recipes</h2>
                <h4 className='md:text-5xl font-bold mt-3'>What They Say</h4>
                <p className='mt-3 font-semibold'>One important aspect of recipes is accurate measuring of ingredients. This ensures that the dish turns out as intended and is delicious to eat. Common measurements include cups, teaspoons, tablespoons, and ounces.</p>
            </div>
            <div className='grid md:grid-cols-3 md:gap-5 md:px-10 px-4 mt-10'>
                {
                    recipes.map(chef => <Chief
                        key={chef.id}
                        chef={chef}
                    ></Chief>)
                }
            </div>

                {/* Place sectiion */}
            <Place></Place>

            {/* Joining section */}
            <Joining></Joining>
        </div>
    );
};

export default Recipies;