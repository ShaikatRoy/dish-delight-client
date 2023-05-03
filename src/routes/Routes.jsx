import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage/DetailsPage";
import RecipeDetails from "../pages/DetailsPage/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


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
                element: <DetailsPage></DetailsPage>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/recipes/:chef_id',
                element: <RecipeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.chef_id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
            
        ]
    }
])

export default router;