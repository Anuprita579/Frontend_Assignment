import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
import store from "../utils/store";
import Cart from "./Cart";

const InstaMart = lazy(()=>import("./InstaMart"));

const AppLayout = () => {
    return(
        <Provider store={store}>
            <Header />
            <Outlet />

        </Provider>
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
                path:"/cart",
                element: <Cart />
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