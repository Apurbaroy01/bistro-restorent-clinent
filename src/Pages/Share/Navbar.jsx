import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

import manLogo from "../../assets/man-logo.png"
import useCart from '../../Hookes/useCart';


const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext)
    const [cart]=useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logOut SuccessFilly")
                navigate("/")

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const nav =
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu"> Our Menu</NavLink>
            <NavLink to="/order/pizza">Order Food</NavLink>
        </>

    return (
        <div className="navbar shadow-sm fixed z-10 bg-white/5 backdrop-blur-md justify-between">

            <div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className='space-x-5'>
                {nav}
            </div>

            {/* right side */}
            <div className="flex-none">
                {
                    user && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div>
                        <div tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="dropdown dropdown-end">
                    {

                        user ? <div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                <div className="w-10 rounded-full">
                                    <img
                                        src={user.photoURL || manLogo} />
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>

                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">{user.displayName || "Set Yor Name"}</span>
                                    </a>
                                </li>
                                <li><Link to="/profile">Settings</Link></li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div> : <button className='btn'><Link to="/login">Login</Link></button>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
