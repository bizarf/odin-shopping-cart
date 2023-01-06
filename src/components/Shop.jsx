import "../styles/Shop.css";

const Shop = (props) => {
    const shopItems = [
        {
            productName: "test",
            image: "test image goes here",
            price: 29.99,
            productId: 1,
        },
        {
            productName: "test2",
            image: "test2 image goes here",
            price: 19.99,
            productId: 2,
        },
        {
            productName: "test3",
            image: "test3 image goes here",
            price: 39.99,
            productId: 3,
        },
    ];

    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <div className="shopGrid">
                {shopItems.map((item) => {
                    return (
                        <div key={item.productId} className="shopItem">
                            <p>{item.productName}</p>
                            <p>{item.image}</p>
                            <p>£{item.price}</p>
                            <button
                                onClick={() =>
                                    props.addToCart(
                                        item.productId,
                                        item.productName,
                                        item.image,
                                        item.price
                                    )
                                }
                            >
                                Add to cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
