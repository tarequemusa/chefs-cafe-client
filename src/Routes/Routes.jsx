import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../Error/Error";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import EmailLogin from "../components/EmailLogin/EmailLogin";
import Register from "../components/Register/Register";

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
    }
])

export default router;