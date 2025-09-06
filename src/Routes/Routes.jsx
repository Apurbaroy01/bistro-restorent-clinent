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
        path: "secreat",
        element: <PrivateRoute>
          <Secreat></Secreat>
        </PrivateRoute>
      },
    ]
  },
]);

export default router;