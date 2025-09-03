import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Share/Footer";
import Navbar from "../Pages/Share/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location)

    const noHeaderFooter= location.pathname.includes("login")
    
    return (

        <div className="flex flex-col min-h-screen">
            {noHeaderFooter || <Navbar />}

            <div className="flex-grow">
                <Outlet />
            </div>

            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;
