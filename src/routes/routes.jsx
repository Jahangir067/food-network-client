import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Shared/Navbar/Navbar";
import Recipies from "../components/Recipies/Recipies";
import Blog from "../components/Blog/Blog";
import Banner from "../components/Banner/Banner";
import ViewRecipes from "../components/ViewRecipes/ViewRecipes";

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
                path: 'details',
                element: <ViewRecipes></ViewRecipes>
            },
            {
                path: '/details/:id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({params}) => fetch(`http://localhost:5000/recipies/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;