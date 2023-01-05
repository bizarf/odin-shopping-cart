const Cart = (props) => {
    return (
        <div>
            <h1>Shopping cart goes here</h1>
            {props.cart.map((cartItem, index) => {
                return (
                    <div key={index}>
                        <p>{cartItem.productName}</p>
                        <button>Remove item</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
