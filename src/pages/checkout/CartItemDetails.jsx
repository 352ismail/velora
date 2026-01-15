import axios from "axios";
import { FormatMoney } from "../utils/money";
export function CartItemDetails({ cartData, getCart }) {
  async function DeleteCartProduct() {
    await axios.delete(`/api/cart-items/${cartData.productId}`);
    await getCart();
  }
  return (
    <>
      <img className="product-image" src={cartData.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartData.product.name}</div>
        <div className="product-price">
          {FormatMoney(cartData.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <span className="quantity-label">{cartData.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
          <span
            onClick={DeleteCartProduct}
            className="delete-quantity-link link-primary"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
