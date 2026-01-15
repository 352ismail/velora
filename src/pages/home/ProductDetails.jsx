import axios from "axios";
import { useState } from "react";
export function ProductDetails({ product, getCart }) {
  const [quantity, setQunatity] = useState(1);
  const [opacity, setOpacity] = useState(0);
  async function addToCart() {
    setOpacity(1);
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity: quantity,
    });
    await getCart();
    setTimeout(() => {
    setOpacity(0);
    }, 2000);
  }
  const selectQuantity = (event) => {
            const quantity = Number(event.target.value);
            setQunatity(quantity);
          }
  
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        ${(product.priceCents / 100).toFixed(2)}
      </div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={selectQuantity}
        >
          <QuantityOptions />
        </select>
      </div>

      <div className="product-spacer"></div>
      <div className="added-to-cart" style={{"opacity": opacity}}>
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        onClick={addToCart}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
}
export function QuantityOptions() {
  return [...Array(16).keys()].map((index) => {
    // Adding a 'key' is required for lists in React
    return (
      <option key={index} value={index}>
        {index}
      </option>
    );
  });
}
