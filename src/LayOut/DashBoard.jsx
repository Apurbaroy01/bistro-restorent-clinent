import { FaAd, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu space-y-2 w-full mt-5">
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><TiShoppingCart /> My cart</NavLink></li>   
                    <li><NavLink to="/dashboard/reservation"><FaAd/> Add a review</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaList /> My Bookings</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome /> Home </NavLink></li>


                </ul>
            </div>
            <div className="p-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;