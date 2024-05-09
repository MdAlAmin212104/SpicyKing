import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/Home/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root />,
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