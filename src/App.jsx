import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import "./App.css";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { OrderPage } from "./pages/order/OrderPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
   const getCart = async () => {
     const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} getCart={getCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
}

export default App;
