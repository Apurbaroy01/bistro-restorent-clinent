import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../LayOut/MAin";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);

export default router;