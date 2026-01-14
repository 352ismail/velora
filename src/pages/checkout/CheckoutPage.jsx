import "./CheckoutPage.css";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import { FormatMoney } from "../utils/money";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./orderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const getPaymentSummary = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    getPaymentSummary();
  }, []);
  return (
    <>
      <title>checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} />
          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} />}
        </div>
      </div>
    </>
  );
}
