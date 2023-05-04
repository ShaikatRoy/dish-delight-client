import React from 'react';

const News = () => {
    return (
        <div className='mb-32'>
            <h2 className='text-center mb-3 text-2xl'>Which one do you Prefer?</h2>
         <div className="flex flex-col w-2/3 lg:flex-row mx-auto">
            <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center relative">
                <img
                    src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image 1"
                    className="absolute inset-0 h-full w-full object-fit-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">Spicy</p>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center relative">
                <img
                    src="https://img.freepik.com/free-photo/traditional-azerbaijan-holiday-novruz-sweets-xoncha_114579-41695.jpg?w=826&t=st=1683212021~exp=1683212621~hmac=ed608a6add215d9f3a121f2ae40d91cfd2acc8209c157acef5844a3d1fcce923"
                    alt="Image 2"
                    className="absolute inset-0 h-full w-full object-fit-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">Sweet</p>
                </div>
            </div>
        </div>
        </div>
        

       
    );
};

export default News;