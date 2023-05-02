import React from 'react';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Dish Delight</h1>
                        <p className="mb-5">The Website conveys a sense of homemade authenticity and suggests that the site will focus on cooking techniques and recipes that prioritize fresh, whole ingredients</p>
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;