import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { chef_id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/recipes?chef_id=${chef_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, [chef_id]);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.recipe_name}</h3>
                    <p>{item.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeDetails;
