import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is For Recipes: {id}</h2>
        </div>
    );
};

export default Details;