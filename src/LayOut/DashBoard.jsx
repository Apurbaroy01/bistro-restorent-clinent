import { FaAd, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    
                    <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><TiShoppingCart /> My cart</NavLink></li>   
                    <li><NavLink to="/dashboard/reservation"><FaAd/> Add a review</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaList /> My Bookings</NavLink></li>

                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;