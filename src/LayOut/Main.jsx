import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer";
import Navbar from "../Pages/Share/Navbar";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow">
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default Main;
