import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage/DetailsPage";
import RecipeDetails from "../pages/DetailsPage/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Stats from "../pages/Home/Stats/Stats";
import Extra from "../pages/Home/Extra/Extra";


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
                path: '/detailsPage/:id',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/recipes:chef_id',
                element: <RecipeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.chef_id}`)
            },
            {
                path: 'stats',
                element: <Stats></Stats>
            },
            {
                path: 'extra',
                element: <Extra></Extra>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
           
            
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;