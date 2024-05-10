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
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import PrivateRoute from "../Private/PrivateRoute";

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
                        element: <Gallery />,
                  },
                  {
                        path: '/added-food',
                        element: <PrivateRoute><AddedFood /></PrivateRoute>
                        
                  },
                  {
                        path: '/add-food',
                        element: <PrivateRoute><AddFood/></PrivateRoute>
                  },
                  {     
                        path: '/order-food',
                        element: <PrivateRoute><OrderFood/></PrivateRoute>
                  },
                  {
                        path: '/food/:id',
                        element: <PrivateRoute><DetailsCard /></PrivateRoute>,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/food/${params.id}`)
                  },
                  {
                        path: '/purchase/:id',
                        element: <PrivateRoute><Purchase /></PrivateRoute>,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/purchase/${params.id}`)
                  },
                  {
                        path: '/update/:id',
                        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/food/${params.id}`)
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