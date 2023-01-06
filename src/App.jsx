import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (productId, productName, image, price) => {
        const item = {
            productId: productId,
            productName: productName,
            image: image,
            price: price,
            quantity: 1,
        };
        setCart([...cart, item]);
    };

    const removeItemFromCart = (productId) => {
        const cartIndex = cart.findIndex((id) => {
            return id.productId === productId;
        });
        const updatedCart = cart;
        updatedCart.splice(cartIndex, 1);
        console.log(updatedCart);
        setCart([...updatedCart]);
    };

    const increaseQuantity = () => {};

    const decreaseQuantity = () => {};

    return (
        <div>
            <BrowserRouter>
                <Navbar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/Shop"
                        element={
                            <Shop
                                setCart={setCart}
                                cart={cart}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="/Cart"
                        element={
                            <Cart
                                cart={cart}
                                removeItemFromCart={removeItemFromCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
