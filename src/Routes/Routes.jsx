import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../Error/Error";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import EmailLogin from "../components/EmailLogin/EmailLogin";
import Register from "../components/Register/Register";
import Chefs from "../components/Chefs/Chefs";
import SingleChef from "../pages/Home/SingleChef/SingleChef";
import RecipeView from "../layouts/RecipeView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>
            },
            {
                path: '/details/:id',
                element: <SingleChef></SingleChef>,
                loader: ({params}) => fetch(`http://localhost:5000/chefsdetails/${ params.id }`)
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
            },
            {
                path: '/emaillogin',
                element: <EmailLogin></EmailLogin>
            }
        ]
    },
    {
        path: 'recipe',
        element: <RecipeView></RecipeView>,
        children: [
            {
                path: ':id',
                element: <SingleChef></SingleChef>
            }
        ]
    }
])

export default router;