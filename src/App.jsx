import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <div>
            <BrowserRouter>
                <Navbar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/Shop"
                        element={<Shop setCart={setCart} cart={cart} />}
                    />
                    <Route path="/Cart" element={<Cart cart={cart} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
