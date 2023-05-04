import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef()
const options = {
    orientation: "portrait",
    unit: "in",
    format: [8.5, 11]
  };
  

const Blog = () => {
    
    return (
        <div className="App text-center my-5">
      <Pdf className='mx-auto' targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-primary">Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
            <h2 className='text-3xl font-bold text-center'>This is blog </h2>

            <div className='mx-auto'>
                <div className="card w-1/2 bg-primary text-primary-content mx-auto mt-5">
                    <div className="card-body">
                        <h2 className="card-title">The differences between uncontrolled and controlled components!</h2>
                        <p>Uncontrolled components are external dependencies that an application relies on, while controlled components are integral parts of the application's codebase that it can directly manage and control.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card w-1/2 bg-primary text-primary-content mx-auto mt-5">
                    <div className="card-body">
                        <h2 className="card-title">How to validate React props using PropType?</h2>
                        <p> to validate React props using PropType, you define the expected types of each prop in the propTypes property of your component class, and the PropType library will check that the props match the expected types.</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card w-1/2 bg-primary text-primary-content mx-auto mt-5">
                    <div className="card-body">
                        <h2 className="card-title">The difference between nodejs and express js!</h2>
                        <p> Node.js is a runtime environment that allows developers to run JavaScript code on the server-side, while Express.js is a web framework that provides tools and features for building web applications with Node.js.</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card w-1/2 bg-primary text-primary-content mx-auto mt-5 mb-10">
                    <div className="card-body">
                        <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                        <p>A custom hook is a reusable JavaScript function that uses built-in hooks to encapsulate logic in a composable way. It can be used to reduce code duplication and make the code more modular, reusable, and easier to maintain in functional components.</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default Blog;
const rootElement = document.getElementById("root");
ReactDOM.render(<Blog></Blog>, rootElement);
