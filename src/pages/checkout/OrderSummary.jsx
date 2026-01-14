import { FormatMoney } from "../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { useState, useEffect } from "react";
import axios from "axios";
export function OrderSummary({cart}) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
      useEffect( () => {
        const getDeliveryData = async ()=> {
          const response = await axios.get(
            "/api/delivery-options?expand=estimatedDeliveryTime"
          );
          setDeliveryOptions(response.data);
        }
        getDeliveryData();
      }, []);
  return (
    <div className="order-summary">
      {cart.map((data) => {
        return (
          <div key={data.productId} className="cart-item-container">
            <div className="delivery-date">Delivery date: Tuesday, June 21</div>

            <div className="cart-item-details-grid">
              <img className="product-image" src={data.product.image} />

              <div className="cart-item-details">
                <div className="product-name">{data.product.name}</div>
                <div className="product-price">
                  {FormatMoney(data.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity:{" "}
                    <span className="quantity-label">{data.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>
            <DeliveryOptions  deliveryOptions={deliveryOptions} cart={data}/>      
            </div>
          </div>
        );
      })}
    </div>
  );
}
