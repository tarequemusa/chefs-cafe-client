import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../Error/Error";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import EmailLogin from "../components/EmailLogin/EmailLogin";
import Register from "../components/Register/Register";
import SingleChef from "../pages/Home/SingleChef/SingleChef";
import RecipeView from "../layouts/RecipeView";
import LoginLayouts from "../layouts/LoginLayouts";
import PrivateRoute from "./PrivateRoute";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Terms from "../pages/Terms/Terms";
import OpenHour from "../pages/OpenHour/OpenHour";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayouts></LoginLayouts>,
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
            },
            {
                path: '/navigationlayouts',
                element: <NavigationBar></NavigationBar>
            },
            {
                path: '/open',
                element: <OpenHour></OpenHour>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'details',
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-chefs-cafe-server-tarequemusa.vercel.app/chefsdetails/${ params.id }`)
            },
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