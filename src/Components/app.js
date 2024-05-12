import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import Shimmer from "./Shimmer";
import store from "../utils/store";

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
        ]
    }
]);
const display = ReactDOM.createRoot(document.getElementById("root"));
display.render(<RouterProvider router={appRouter} />);