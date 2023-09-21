import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PropTypes from "prop-types";

const Router = ({
    cart,
    setCart,
    addToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
}) => {
    const router = createHashRouter([
        {
            path: "/",
            element: <MainLayout cart={cart} />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/Shop",
                    element: (
                        <Shop
                            setCart={setCart}
                            cart={cart}
                            addToCart={addToCart}
                        />
                    ),
                },
                {
                    path: "/Cart",
                    element: (
                        <Cart
                            cart={cart}
                            removeItemFromCart={removeItemFromCart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    ),
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

Router.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func,
    addToCart: PropTypes.func,
    removeItemFromCart: PropTypes.func,
    increaseQuantity: PropTypes.func,
    decreaseQuantity: PropTypes.func,
};

export default Router;
