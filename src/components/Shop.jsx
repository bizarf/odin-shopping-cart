import "../styles/Shop.css";
import shopItems from "./shopItems";
import { ShopContext } from "../App";
import React, { useContext } from "react";

const Shop = () => {
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <div className="shopGrid">
                {shopItems.map((item) => {
                    return (
                        <div key={item.productId} className="shopItem">
                            <p className="shopProductName">
                                {item.productName}
                            </p>
                            <img
                                src={item.image}
                                alt={item.productName}
                                className="shopPageProductImage"
                            />
                            <p>£{item.price}</p>
                            <button
                                onClick={() =>
                                    addToCart(
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
