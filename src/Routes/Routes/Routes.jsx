import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home";
import Courses from "../../pages/Courses";
import Blog from "../../pages/blog";
import Faq from "../../pages/Faq";
import Login from "../../pages/Login";
import Category from "../../pages/Category";
import NotFoundPage from "../../pages/NotFoundPage";
import Checkout from "../../pages/Checkout";
import Register from "../../pages/Register";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Courses></Courses>
            },
            {
                path:'/course/:id',
                loader:async ({params}) =>{
                    return fetch(`https://for-courses.vercel.app/courses/${params.id}`)
                },
                element:<Category></Category>
            },
            {
                path:'/checkout',
                element:<Privateroute><Checkout></Checkout></Privateroute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'*',
        element:<NotFoundPage></NotFoundPage>
    }
])