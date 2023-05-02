import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Shared/Navbar/Navbar";
import Recipies from "../components/Recipies/Recipies";
import Blog from "../components/Blog/Blog";
import ViewRecipes from "../components/ViewRecipes/ViewRecipes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Recipies></Recipies>

            },
            {
                path: 'details/:id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({params}) => fetch(`http://localhost:5000/recipies/${params.id}`)
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