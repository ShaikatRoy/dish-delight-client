import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const DetailsPage = () => {
    const {id} = useParams();
    const selectedChefs = [useLoaderData()];
    
    return (
        <div>
             <h2 className='text-5xl font-bold text-center my-5'>Recipe Page: {id}</h2>

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