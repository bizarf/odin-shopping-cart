import "../styles/Shop.css";

const Shop = (props) => {
    const shopItems = [
        {
            productName: "test",
            image: "test image goes here",
            price: 29.99,
        },
        {
            productName: "test2",
            image: "test2 image goes here",
            price: 19.99,
        },
        {
            productName: "test3",
            image: "test3 image goes here",
            price: 39.99,
        },
    ];

    function addToCart(productName, image, price) {
        let test = {
            productName: productName,
            image: image,
            price: price,
            quantity: 1,
        };
        props.setCart([...props.cart, test]);
        console.log(props.cart);
    }

    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <div className="shopGrid">
                {shopItems.map((item, index) => {
                    return (
                        <div key={index} className="shopItem">
                            <p>{item.productName}</p>
                            <p>{item.image}</p>
                            <p>{item.price}</p>
                            <button
                                onClick={() =>
                                    addToCart(
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
