import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import AddedFood from "../Pages/Profile/AddedFood/AddedFood";
import AddFood from "../Pages/Profile/AddFood/AddFood";
import OrderFood from "../Pages/Profile/OrderFood/OrderFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsCard from "../components/DetailsCard/DetailsCard";
import axios from "axios";
import Purchase from "../components/Purchase/Purchase";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root />,
            errorElement : <ErrorPage/>,
            children: [
                  {
                        path: '/',
                        element: <Home/>,
                  },
                  {
                        path: '/foods',
                        element: <AllFoods/>
                  },
                  {
                        path: '/gallery',
                        element: <Gallery/>
                  },
                  {
                        path: '/added-food',
                        element: <AddedFood/>
                  },
                  {
                        path: '/add-food',
                        element: <AddFood/>
                  },
                  {     
                        path: '/order-food',
                        element: <OrderFood/>
                  },
                  {
                        path: '/food/:id',
                        element: <DetailsCard />,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/food/${params.id}`)
                  },
                  {
                        path: '/purchase/:id',
                        element: <Purchase />,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/purchase/${params.id}`)
                  },
                  {
                        path: '/login',
                        element: <Login/>
                  },
                  {
                        path: '/register',
                        element: <Register/>
                  }
            ]
      }
])
export default router;