import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import LazyLoad from 'react-lazy-load';

const ChefDetails = ({ chef }) => {
    const [showButton, setShowButton] = useState(true);

    const handleAddToFavorites = () => {
        toast("Added to favorite !");
        setShowButton(false);
    };


    const { chef_name, years_of_experience, number_of_recipes, likes, picture_url, bio } = chef;
    return (
        <>
            <LazyLoad height={762} offset={300}>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                       
                            <img src={picture_url} className="max-w-xs rounded-lg shadow-2xl" />
                        
                        <div>
                            <h1 className="text-5xl font-bold">{chef_name}</h1>
                            <p className="py-4">{bio}</p>
                            <p className="pt-4">Years of experience: {years_of_experience}</p>
                            <p className="pt-4">Numbers of recipes: {number_of_recipes}</p>
                            <div className='flex'>
                                <p className="pt-4 grow ">Likes: {likes}</p>
                                {showButton && (
                                    <button onClick={handleAddToFavorites} className="btn gap-2 me-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        Add to favorite
                                    </button>
                                )}
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
                </LazyLoad>
        </>
    );
};

export default ChefDetails;