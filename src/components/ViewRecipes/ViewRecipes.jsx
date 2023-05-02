import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {
    const details = useLoaderData();
    const {} = details;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">heello</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipes;