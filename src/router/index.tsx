import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DefaultLayout} from "@/layout/default.tsx";
import {Fragment} from "react";
import {Main} from "@/app/main";
import {Share} from "@/app/share";

const routerChildren = [
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/share',
        element: <Share/>
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        errorElement: <Fragment/>,
        children: routerChildren,
    }
])
export const Routers = () => {
    return <RouterProvider router={router}/>
}