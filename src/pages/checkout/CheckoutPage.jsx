import "./CheckoutPage.css";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./orderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cart,getCart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  const getPaymentSummary = async () => {
    const response = await axios.get("/api/payment-summary");
    setPaymentSummary(response.data);
  };
  useEffect(() => {
    getPaymentSummary();
  }, []);
  return (
    <>
      <title>checkout</title>
      <CheckoutHeader paymentSummary={paymentSummary}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
        <OrderSummary cart={cart} getCart={getCart} getPaymentSummary={getPaymentSummary}/>
          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} />}
        </div>
      </div>
    </>
  );
}
