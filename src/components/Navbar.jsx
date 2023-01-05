import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <Link to="/">Logo goes here</Link>
            <ul className="navLinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Shopping Cart ({props.cart.length})</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
