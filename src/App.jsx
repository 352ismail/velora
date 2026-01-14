import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import "./App.css";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { OrderPage } from "./pages/order/OrderPage";
import axios  from "axios";
import { useState , useEffect } from "react";

function App() {
  const [cart , setCart] = useState([]);
  useEffect(()=>{
    axios.get("/api/cart-items?expand=product").then((cartItems)=>{
  setCart(cartItems.data)
  })
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage  cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage cart={cart}/>} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
    </Routes>
  );
}

export default App;
