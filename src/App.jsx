import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (productId, productName, image, price) => {
        const cartIndex = cart.findIndex((id) => {
            return id.productId === productId;
        });
        // check if the product is already in the cart to avoid adding the product twice. if it's already in the cart, then increase the quantity by 1
        if (cartIndex === -1) {
            const item = {
                productId: productId,
                productName: productName,
                image: image,
                price: price,
                quantity: 1,
            };
            setCart([...cart, item]);
        } else {
            increaseQuantity(productId);
        }
    };

    const removeItemFromCart = (productId) => {
        const cartIndex = cart.findIndex((id) => {
            return id.productId === productId;
        });
        // make a copy of the array as we don't want to directly mutate it
        const updatedCart = cart;
        // remove the item with the index that was found in the above lines
        updatedCart.splice(cartIndex, 1);
        // update the cart's state by wrapping it in square brackets, adding a spread operator and the updated cart array
        setCart([...updatedCart]);
    };

    const increaseQuantity = (productId) => {
        const cartIndex = cart.findIndex((id) => {
            return id.productId === productId;
        });
        const updatedCart = cart;
        updatedCart[cartIndex].quantity++;
        setCart([...updatedCart]);
    };

    const decreaseQuantity = (productId) => {
        const cartIndex = cart.findIndex((id) => {
            return id.productId === productId;
        });
        const updatedCart = cart;
        if (updatedCart[cartIndex].quantity === 1) {
            removeItemFromCart(productId);
        } else {
            updatedCart[cartIndex].quantity--;
            setCart([...updatedCart]);
        }
    };

    return (
        <div className="app">
            <BrowserRouter basename="/odin-shopping-cart">
                <Navbar cart={cart} />
                {/* routes are placed here, so that these pages will open under the navbar div which is the main viewing area */}
                <div className="content">
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
                </div>
            </BrowserRouter>
            <footer>
                <span>
                    Page created by{" "}
                    <a href="https://github.com/bizarf">Bizarf</a>
                </span>
            </footer>
        </div>
    );
};

export default App;
