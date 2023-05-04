import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import News from '../../Home/News/News';

const DetailsPage = () => {

    const handleAddToFavorites = (id) => {
        toast("Added to favorite !");
        const updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === id) {
                return { ...recipe, isAddedToFavorites: true };
            }
            return recipe;
        });
        setRecipes(updatedRecipes);
    };


    const { id } = useParams();
    const selectedChefs = [useLoaderData()];
    const [recipes, setRecipes] = useState([]);
    console.log(recipes);
    useEffect(() => {
        fetch(`https://dish-delight-server-shaikatroy.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>

            {
                selectedChefs.map((chef) => <ChefDetails
                    keys={chef.id}
                    chef={chef}
                ></ChefDetails>)
            }

            <h2 className='text-3xl font-semibold text-center mb-10'>Top Recipes</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-2 w-4/5 mx-auto">
                {
                    recipes.map(recipe => (
                        <div className="card w-full glass flex ">
                            <figure><img src={recipe.recipe_picture} class="h-64 w-full object-fit" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{recipe.recipe_name}</h2>
                                {
                                    recipe.ingredients.map((ingredent) => <li key={id}>{ingredent}</li>)
                                }
                                <p>Cooking method: <span className='text-white'>{recipe.cooking_method}</span></p>
                                <div className='flex'>
                                    <Rating className='grow'
                                        style={{ maxWidth: 140 }}
                                        value={Math.round(recipe.rating || 0)} readOnly />
                                    <span className='ms-3 mt-2 me-10' >{recipe.rating}</span>

                                    {!recipe.isAddedToFavorites && (
                                        <button
                                            onClick={() => handleAddToFavorites(recipe.id)}
                                            className="btn gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            Add to favorite
                                        </button>
                                    )}

                                </div>

                                <div className="card-actions justify-end"></div>
                            </div>
                        </div>
                    ))
                }
                <ToastContainer />
            </div>
        </div>
        

    );
};

export default DetailsPage;
