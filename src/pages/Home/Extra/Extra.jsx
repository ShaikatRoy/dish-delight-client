import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Extra = () => {
    const [rating, setRating] = useState(0)
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2>extra section</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 mx-10">
    {items.slice(0, 9).map(item => (
        <div className="card w-full glass ">
            <figure><img src={item.recipe_picture} class="h-56 w-full object-fit" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{item.recipe_name}</h2>
                <div className='flex'>
                <Rating 
                        style={{ maxWidth: 140 }} 
                        value={Math.round(item.rating || 0)} readOnly />
                        <span className='ms-3 mt-2' >{item.rating}</span>
                </div>

                <div className="card-actions justify-end"></div>
            </div>
        </div>
    ))}
</div>

        </div>
    );
};

export default Extra;