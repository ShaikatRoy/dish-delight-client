import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signIn, handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
        signIn(email, password)
            .then(result => {
                navigate('/')
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true})
            })
            .catch(error => {
                console.log(error);
                setErrorMessage('Invalid email or password');
            })
            
          
    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <p className=' font-semibold text-center'> or login using</p>
                    <div className='p-5 text-center'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning "><FaGoogle className='text-xl me-2' />- Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-success mt-5"><FaGithub className='text-xl me-2'/>- GitHub</button>
                    </div>
                </div>
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-5">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                               <p className="label-text-alt link link-hover">Don't have an account? <Link to="/register"> Register!</Link></p> 
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        
                    </form>
                    
                </div>
                {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
                <p className='text-lime-500'></p>
            </div>
        </div>
    );
};

export default Login;