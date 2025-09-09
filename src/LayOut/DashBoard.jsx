import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList, FaVoicemail } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {

    const isAdmin = true;
    
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-2 bg-orange-400 ">
                <ul className="menu space-y-2 w-full mt-5">
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><TiShoppingCart /> My cart</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaAd /> Add a review</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaList /> My Bookings</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome /> Home </NavLink></li>
                    <li><NavLink to="/menu"><FaSearch /> Menu </NavLink></li>
                    <li><NavLink to="/order/contact"><IoIosMail /> Contact </NavLink></li>


                </ul>
            </div>
            <div className="col-span-10 bg-gray-50 p-5 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;