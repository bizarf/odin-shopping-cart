import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { ShopContext } from "../App";
import React, { useContext } from "react";

const Navbar = () => {
    const { cart } = useContext(ShopContext);

    return (
        <nav className="navbar">
            {/* link function from react router to make the hyperlinks */}
            <Link to="/" className="logo">
                Computer World
            </Link>
            <ul className="navLinks">
                <li>
                    <Link to="/" className="navLinks">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className="navLinks">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="navLinks">
                        Shopping Cart ({cart.length})
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
