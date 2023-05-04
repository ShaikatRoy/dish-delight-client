import React from 'react';
import Chefs from '../Chefs/Chefs';
import Stats from '../Stats/Stats';
import Extra from '../Extra/Extra';


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Dish Delight</h1>
                        <p className="mb-5 text-white">The Website conveys a sense of homemade authenticity and suggests that the site will focus on cooking techniques and recipes that prioritize fresh, whole ingredients</p>
                        <button className="btn glass">View recipes</button>
                    </div>
                </div>
            </div>
            <Chefs></Chefs>
            <Stats></Stats>
            <Extra></Extra>
        </div>
    );
};

export default Home;