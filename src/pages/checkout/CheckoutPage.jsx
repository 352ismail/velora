import "./CheckoutPage.css";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import { FormatMoney } from "../utils/money";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });
  }, []);
  return (
    <>
      <title>checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((data) => {
              return (
                <div key={data.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date: Tuesday, June 21
                  </div>

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
                          <span className="quantity-label">
                            {data.quantity}
                          </span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map((deliveryOption) => {
                        let priceString = "Free";
                        if (deliveryOption.priceCents > 0) {
                          priceString = `$${FormatMoney(
                            deliveryOption.priceCents
                          )}`;
                        }
                        return (
                          <div key={deliveryOption.id} className="delivery-option">
                            <input
                              type="radio"
                              checked={
                                deliveryOption.id === data.deliveryOptionId
                              }
                              className="delivery-option-input"
                              name={`delivery-option-${data.productId}`}
                            />
                            <div>
                              <div className="delivery-option-date">
                                {dayjs(
                                  deliveryOption.estimatedDeliveryTimeMs
                                ).format("dddd, MMMM, D")}
                              </div>
                              <div className="delivery-option-price">
                                {priceString} - Shipping
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {paymentSummary && (
            <div className="payment-summary">
              <div className="payment-summary-title">Payment Summary</div>

              <div className="payment-summary-row">
                <div>Items ({paymentSummary.totalItems}):</div>
                <div className="payment-summary-money">${FormatMoney(paymentSummary.productCostCents)}</div>
              </div>

              <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">${FormatMoney(paymentSummary.shippingCostCents)}</div>
              </div>

              <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">${FormatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
              </div>

              <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">${FormatMoney(paymentSummary.taxCents)}</div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">${FormatMoney(paymentSummary.totalCostCents)}</div>
              </div>

              <button className="place-order-button button-primary">
                Place your order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
