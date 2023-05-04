import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1683207148~exp=1683207748~hmac=5a81553961285c31f3512891ee3bfcd646d7ed2e8060c67d6ba21a8339afb3a3")' }}>
            <div className=" min-h-screen flex flex-col justify-center items-center">
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