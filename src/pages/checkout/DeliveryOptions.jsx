import axios from "axios";
import { FormatMoney } from "../utils/money";
import dayjs from "dayjs";
export function DeliveryOptions({deliveryOptions, cart ,getCart ,getPaymentSummary}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "Free";
        if (deliveryOption.priceCents > 0) {
          priceString = `$${FormatMoney(deliveryOption.priceCents)}`;
        }
        return (
          <div onClick={ async ()=>{
            await axios.put(`api/cart-items/${cart.productId}`,{
                deliveryOptionId: deliveryOption.id
            });
            getCart();
            getPaymentSummary();

          }}key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              onChange={() =>{}}
              checked={deliveryOption.id === cart.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cart.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
                )}
              </div>
              <div className="delivery-option-price">
                {priceString} - Shipping
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
