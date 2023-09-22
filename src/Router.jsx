import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const Router = () => {
    const router = createHashRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/Shop",
                    element: <Shop />,
                },
                {
                    path: "/Cart",
                    element: <Cart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
