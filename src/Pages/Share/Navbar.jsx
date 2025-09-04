import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logOut SuccessFilly")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const nav =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu"> Our Menu</Link></li>
            <li><Link to="/order/pizza">Order Food</Link></li>


        </>

    return (
        <div className="navbar shadow-sm fixed z-10 bg-white/5 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="navbar-end flex items-center gap-2">
                    {user && <p className="mr-2">{user.email}</p>}

                    {user ?
                        <button onClick={handleLogOut} className="btn btn-sm btn-error"> LogOut</button> :
                        <Link to="/login">
                            <button className="btn btn-sm btn-primary">Login</button>
                        </Link>
                    }
                </div>


            </div>
        </div>
    );
};

export default Navbar;