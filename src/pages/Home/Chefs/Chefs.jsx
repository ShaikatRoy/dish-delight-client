import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chefs = () => {
    const [cooks, setCooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setCooks(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-20'>All chefs</h2>

            <LazyLoad height={762} offset={300}>
            <div className="carousel w-full">
                {cooks.map((cook, index) => (
                    <div key={cook.id} id={`slide${index + 1}`} className="carousel-item relative w-full">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index === 0 ? cooks.length : index}`} className="btn btn-circle">❮</a> 
                            <a href={`#slide${index === cooks.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                        </div>
                        <div className="hero min-h-screen bg-base-200 ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={cook.picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{cook.chef_name}</h1>
                                    <p className="py-4">{cook.bio}</p>
                                    <p className="pt-4">Years of experience: {cook.years_of_experience}</p>
                                    <p className="pt-4">Numbers of recipes: {cook.number_of_recipes}</p>
                                    <div className='flex'>
                                    <p className="pt-4 grow ">Likes: {cook.likes}</p>
                                    <Link to={`/detailsPage/${cook.id}`} ><button className="btn btn-primary">View Recipes</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </LazyLoad>
        </div>
    );
};

export default Chefs;



{/* {cooks.map(cook => (
                        <div className="hero min-h-screen bg-base-200 ">
                            <div key={cook.id} className="hero-content flex-col lg:flex-row">
                                <img src={cook.picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{cook.chef_name}</h1>
                                    <p className="py-6">{cook.bio}</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    