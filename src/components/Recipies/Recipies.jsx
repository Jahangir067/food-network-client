import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chief from '../Chief/Chief';
import Place from '../Place/Place';
import Joining from '../Joining/Joining';

const Recipies = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipies')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className='w-[700px] mx-auto text-center'>
                <h2 className='text-3xl font-bold mt-10 text-orange-600 text-center'>Recipes</h2>
                <h4 className='text-5xl font-bold mt-3'>What They Say</h4>
                <p className='mt-3 font-semibold'>One important aspect of recipes is accurate measuring of ingredients. This ensures that the dish turns out as intended and is delicious to eat. Common measurements include cups, teaspoons, tablespoons, and ounces.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 px-10 mt-10'>
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