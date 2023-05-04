import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/blog" className="justify-between">
                                Blog
                            </Link>
                        </li>
                        <li><a>Chefs</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold"> DishDelight</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li><a>Chefs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 me-5 " >
                        <img  src={user.photoURL}
                            data-tooltip-id="tooltip-anchor-hide"
                            data-tooltip-content={user.displayName}
                            data-tooltip-delay-hide={1000}
                        /> <Tooltip id="tooltip-anchor-hide" />
                    </div>
                </div>}

                {user ?
                    <button onClick={handleLogout} className='btn'>Logout</button> :
                    <Link to="/login">
                        <button className='btn'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;