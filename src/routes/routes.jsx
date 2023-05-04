import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Shared/Navbar/Navbar";
import Recipies from "../components/Recipies/Recipies";
import Blog from "../components/Blog/Blog";
import ViewRecipes from "../components/ViewRecipes/ViewRecipes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Recipies></Recipies>

            },
            {
                path: 'details/:id',
                element: <PrivetRoutes><ViewRecipes></ViewRecipes></PrivetRoutes>,
                loader: ({params}) => fetch(`https://the-food-network-server-noornabi07.vercel.app/recipies/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;