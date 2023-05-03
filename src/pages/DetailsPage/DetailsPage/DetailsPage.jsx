import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const DetailsPage = () => {
    const {id} = useParams();
    const selectedChefs = [useLoaderData()];
    
    return (
        <div>
             <h2>This is For Recipes: {id}</h2>

             {
                selectedChefs.map((chef) => <ChefDetails
                    keys={chef.id}
                    chef={chef}
                 ></ChefDetails>)
             }
        </div>
    );
};

export default DetailsPage;