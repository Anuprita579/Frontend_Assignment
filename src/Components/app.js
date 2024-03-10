import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";

const InstaMart = lazy(()=>import("./InstaMart"));

const AppLayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/instamart",
                element: 
                    <Suspense fallback={<Shimmer />}>
                        <InstaMart />
                    </Suspense>
            },
        ]
    }
]);
const display = ReactDOM.createRoot(document.getElementById("root"));
display.render(<RouterProvider router={appRouter} />);