import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
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
                        Shopping Cart ({props.cart.length})
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
