import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Secreat from "../Pages/Share/Secreat";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProfileSetting from "../Components/Profile/ProfileSetting/ProfileSetting";
import DashBoard from "../LayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/Cart/AllUsers/AllUsers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:catagory",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "profile",
        element: <ProfileSetting></ProfileSetting>
      },
      {
        path: "secreat",
        element: <PrivateRoute>
          <Secreat></Secreat>
        </PrivateRoute>
      },
    ]
  },
  {
    path:"dashboard",
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>
      },

      // admin routes
      {
        path:"allUsers",
        element:<AllUsers></AllUsers>
      },

    ]
  }
]);

export default router;