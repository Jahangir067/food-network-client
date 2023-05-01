import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Shared/Navbar/Navbar";
import Recipies from "../components/Recipies/Recipies";
import Blog from "../components/Blog/Blog";

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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;