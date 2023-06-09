import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Guest from "../components/guest";
import Default from "../components/default";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Payments from "../pages/Payments";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Guest/>,
        children: [
            {
                path:'/',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }
        ]
    },
    {
        path:'/',
        element: <Default/>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path: '/contacts',
                element:<Contacts />
            },
            {
                path: '/payments',
                element:<Payments />
            }
        ]
    }

]);


