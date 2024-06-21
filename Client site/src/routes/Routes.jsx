import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItems from "../pages/AddCraftItems";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import CardDetail from "../pages/CardDetail";
import UpdateInfo from "../pages/UpdateInfo";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://art-and-craft-server-three.vercel.app/drawing/')
            },
            {
                path: "/allArtItems",
                element: <AllArtAndCraft></AllArtAndCraft>,
            },
            {
                path: "/addCardItems",
                element: <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>,
            },
            {
                path: "/mycraftList",
                element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "/cardDetail/:id",
                element: <PrivateRoute> <CardDetail></CardDetail> </PrivateRoute>,
                loader: ({params}) => fetch(`https://art-and-craft-server-three.vercel.app/drawing/${params.id}`)            
            },
            {
                path: "/updateInfo/:id",
                element: <PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>,
                loader: ({params}) => fetch(`https://art-and-craft-server-three.vercel.app/drawing/${params.id}`)
            }

        ]
    }
])