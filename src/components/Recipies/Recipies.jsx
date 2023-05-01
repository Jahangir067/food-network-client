import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chief from '../Chief/Chief';

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
            <h2 className='text-5xl font-bold mt-10 text-purple-700 text-center'>Popular Recipes Person</h2>
            <div className='grid grid-cols-3 gap-5 px-10 mt-10'>
                {
                    recipes.map(chef => <Chief
                        key={chef.id}
                        chef={chef}
                    ></Chief>)
                }
            </div>
        </div>
    );
};

export default Recipies;