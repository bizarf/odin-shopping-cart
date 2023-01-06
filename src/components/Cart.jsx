const Cart = (props) => {
    const total = () => {
        return props.cart.reduce((total, item) => {
            return total + item.price;
        }, 0);
    };

    return (
        <div>
            <h1>Shopping cart goes here</h1>
            <ul>
                {props.cart.map((cartItem, index) => {
                    return (
                        <li key={index}>
                            <p>{cartItem.image}</p>
                            <div>
                                <p>{cartItem.productName}</p>
                                <p>£{cartItem.price}</p>
                            </div>
                            <div>
                                <button>-</button>
                                <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    value={cartItem.quantity}
                                />
                                <button>+</button>
                            </div>

                            <button
                                onClick={() =>
                                    props.removeItemFromCart(cartItem.productId)
                                }
                            >
                                Remove item
                            </button>
                        </li>
                    );
                })}
                <p>Total: £{total()}</p>
            </ul>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
