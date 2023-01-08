import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = (props) => {
    const total = () => {
        // reduce function to go through each item's price in the array and return the total
        let totalPrice = props.cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        // format the total to show numbers with two decimal places
        return parseFloat(totalPrice).toFixed(2);
    };

    const cartItems = props.cart.length;

    return (
        <div className="cartPage">
            <h1>My Shopping Cart</h1>
            <hr />
            {/* if the cart has items then render a ul element containing a map of the cart items as li elements. at the bottom of the ul include a total and checkout button */}
            {cartItems > 0 ? (
                <ul>
                    {props.cart.map((cartItem, index) => {
                        return (
                            <li key={index} className="cartItems">
                                <div className="itemContainer">
                                    <img
                                        src={cartItem.image}
                                        alt={cartItem.productName}
                                        className="cartItemImage"
                                    />
                                    <div>
                                        <p>{cartItem.productName}</p>
                                        <p>
                                            £
                                            {parseFloat(
                                                cartItem.price *
                                                    cartItem.quantity
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                    <div className="cartControls">
                                        <button
                                            onClick={() =>
                                                props.decreaseQuantity(
                                                    cartItem.productId
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <span id="quantity">
                                            {cartItem.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                props.increaseQuantity(
                                                    cartItem.productId
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="removeItemContainer">
                                        <button
                                            className="removeItemBtn"
                                            onClick={() =>
                                                props.removeItemFromCart(
                                                    cartItem.productId
                                                )
                                            }
                                        >
                                            Remove item
                                        </button>
                                    </div>
                                </div>
                                <hr></hr>
                            </li>
                        );
                    })}
                    <div className="total">
                        <p>Total: £{total()}</p>
                        <button>Checkout</button>
                    </div>
                </ul>
            ) : (
                // when the cart is empty, return a message to inform that the cart is empty
                <div className="emptyCart">
                    <h3>Your cart is empty</h3>
                    <Link to="/shop">
                        <button>Visit our shop!</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
