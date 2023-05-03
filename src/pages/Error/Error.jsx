import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg mb-4">We apologize for the inconvenience.</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    <Link tp="/">Go Back</Link>
                </button>
            </div>
        </div>
    );
};

export default Error;