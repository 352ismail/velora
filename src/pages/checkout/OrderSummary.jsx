import { FormatMoney } from "../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { DeliveryDate } from "./DeliveryDate";
import { useState, useEffect } from "react";
import axios from "axios";
import { CartItemDetails } from "./CartItemDetails";
export function OrderSummary({ cart ,getCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const getDeliveryData = async () => {
    const response = await axios.get(
      "/api/delivery-options?expand=estimatedDeliveryTime"
    );
    setDeliveryOptions(response.data);
  };
    getDeliveryData();
  }, []);
  return (
    <div className="order-summary">
      {cart.map((cartData) => {
        return (
          <div key={cartData.productId} className="cart-item-container">
           <DeliveryDate cartData={cartData} />
            <div className="cart-item-details-grid">
              <CartItemDetails cartData={cartData} getCart={getCart} />
              <DeliveryOptions
                deliveryOptions={deliveryOptions}
                cart={cartData}
                getCart={getCart}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
