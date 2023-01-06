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
        <div>
            <h1>Shopping cart goes here</h1>
            <ul>
                {cartItems > 0 ? (
                    props.cart.map((cartItem, index) => {
                        return (
                            <li key={index}>
                                <p>{cartItem.image}</p>
                                <div>
                                    <p>{cartItem.productName}</p>
                                    <p>£{cartItem.price}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            props.decreaseQuantity(
                                                cartItem.productId
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        name="quantity"
                                        id="quantity"
                                        value={cartItem.quantity}
                                        readOnly
                                    />
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

                                <button
                                    onClick={() =>
                                        props.removeItemFromCart(
                                            cartItem.productId
                                        )
                                    }
                                >
                                    Remove item
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <p>Cart is empty</p>
                )}
            </ul>
            <p>Total: £{total()}</p>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
