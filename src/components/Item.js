import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleAddToCart() { 
    setInCart(inCart => !inCart)
  };

  const itemClass = inCart ? "in-cart" : "";

  const cartStatus = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
